const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  user: "sa",
  password: "Astha@11",
  server: "localhost",
  database: "MyDB",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// ✅ ONE GET API
app.get("/api/furniture", async (req, res) => {
  try {
    const pool = await sql.connect(config);

    const result = await pool.request().query(`
      SELECT p.*, c.colorName
      FROM Products p
      LEFT JOIN Colors c ON p.id = c.productId
    `);

    const rows = result.recordset;

    const formatted = {};

    rows.forEach((row) => {
      const category = row.category;

      if (!formatted[category]) {
        formatted[category] = [];
      }

      let product = formatted[category].find((p) => p.id === row.id);

      if (!product) {
        product = {
          id: row.id,
          name: row.name,
          description: row.description,
          price: row.price,
          offerPrice: row.offerPrice,
          image: row.imageUrl,
          colorOptions: row.hasColorOptions,
          colors: [],
        };
        formatted[category].push(product);
      }

      if (row.colorName) {
        product.colors.push(row.colorName);
      }
    });

    res.json(formatted);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching data");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

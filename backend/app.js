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
          furnitureType: row.furnitureType,
          description: row.description,
          price: row.price,
          offerPrice: row.offerPrice,
          image: row.imageUrl,
          colorOptions: row.hasColorOptions,
          colors: [],
          productHighlights: row.productHighlights
            ? JSON.parse(row.productHighlights)
            : null,
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

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await sql.connect(config);

    const result = await pool.request().input("id", id).query(`
        SELECT p.*, c.colorName
        FROM Products p
        LEFT JOIN Colors c ON p.id = c.productId
        WHERE p.id = @id
      `);

    const rows = result.recordset;

    if (!rows.length) {
      return res.status(404).send("Product not found");
    }

    const product = {
      id: rows[0].id,
      name: rows[0].name,
      furnitureType: rows[0].furnitureType,
      description: rows[0].description,
      price: rows[0].price,
      offerPrice: rows[0].offerPrice,
      image: rows[0].imageUrl,
      colorOptions: rows[0].hasColorOptions,
      colors: rows.map((r) => r.colorName).filter(Boolean),
      category: rows[0].category,
      productHighlights: rows[0].productHighlights
        ? JSON.parse(rows[0].productHighlights)
        : null,
    };

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

// POST /api/add-product

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
//add item
app.post("/api/add-product", upload.single("image"), async (req, res) => {
  const {
    category,
    name,
    description,
    price,
    offer,
    offerPrice,
    colorOption,
    colors,
    productHighlights,
  } = req.body;

  const imageUrl = req.file
    ? `http://localhost:5000/uploads/${req.file.filename}`
    : null;

  try {
    const pool = await sql.connect(config);

    // insert product
    const result = await pool
      .request()
      .input("name", name)
      .input("description", description)
      .input("price", parseInt(price))
      .input("offerPrice", offer === "yes" ? parseInt(offerPrice) : null)
      .input("imageUrl", imageUrl)
      .input("category", category)
      .input("productHighlights", productHighlights)
      .input("hasColorOptions", colorOption === "yes" ? 1 : 0).query(`
        INSERT INTO Products
        (name, description, price, offerPrice, imageUrl, category, hasColorOptions, productHighlights)

        OUTPUT INSERTED.id

        VALUES
        (@name, @description, @price, @offerPrice, @imageUrl, @category, @hasColorOptions, @productHighlights)
      `);

    const productId = result.recordset[0].id;

    // fix colors parsing
    let colorArray = [];

    if (colorOption === "yes") {
      if (typeof colors === "string") {
        colorArray = JSON.parse(colors);
      } else if (Array.isArray(colors)) {
        colorArray = colors;
      }
    }

    // insert colors
    for (let color of colorArray) {
      await pool
        .request()
        .input("productId", productId)
        .input("colorName", color).query(`
          INSERT INTO Colors (productId, colorName)
          VALUES (@productId, @colorName)
        `);
    }

    res.send("Product added successfully");
  } catch (err) {
    console.log(err);

    res.status(500).send(err.message);
  }
});

// delete item
app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await sql.connect(config);

    await pool
      .request()
      .input("id", id)
      .query("DELETE FROM Products WHERE id = @id");

    res.send("Deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

//update item
app.put("/api/product/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;

  const {
    name,
    description,
    price,
    offer,
    offerPrice,
    category,
    colorOption,
    colors,
  } = req.body;

  try {
    const pool = await sql.connect(config);

    let imageUrl = null;

    if (req.file) {
      imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    // update product
    await pool
      .request()
      .input("id", id)
      .input("name", name)
      .input("description", description)
      .input("price", parseInt(price))
      .input("offerPrice", offer === "yes" ? parseInt(offerPrice) : null)
      .input("category", category)
      .input("hasColorOptions", colorOption === "yes" ? 1 : 0)
      .input("imageUrl", imageUrl).query(`
        UPDATE Products

        SET
          name = @name,
          description = @description,
          price = @price,
          offerPrice = @offerPrice,
          category = @category,
          hasColorOptions = @hasColorOptions,
          imageUrl = COALESCE(@imageUrl, imageUrl)

        WHERE id = @id
      `);

    // delete old colors
    await pool.request().input("id", id).query(`
        DELETE FROM Colors
        WHERE productId = @id
      `);

    // fix colors parsing
    let colorArray = [];

    if (colorOption === "yes") {
      if (typeof colors === "string") {
        colorArray = JSON.parse(colors);
      } else if (Array.isArray(colors)) {
        colorArray = colors;
      }
    }

    // insert colors
    for (let color of colorArray) {
      await pool.request().input("productId", id).input("colorName", color)
        .query(`
          INSERT INTO Colors (productId, colorName)
          VALUES (@productId, @colorName)
        `);
    }

    res.send("Updated successfully");
  } catch (err) {
    console.log(err);

    res.status(500).send(err.message);
  }
});

app.use("/uploads", express.static("uploads"));

app.get("/api/category/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const pool = await sql.connect(config);

    const result = await pool.request().input("category", category).query(`
        SELECT p.*, c.colorName
        FROM Products p
        LEFT JOIN Colors c ON p.id = c.productId
        WHERE p.category = @category
      `);

    const rows = result.recordset;

    const formatted = [];

    rows.forEach((row) => {
      let product = formatted.find((p) => p.id === row.id);

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

          productHighlights: row.productHighlights
            ? JSON.parse(row.productHighlights)
            : null,
        };

        formatted.push(product);
      }

      if (row.colorName) {
        product.colors.push(row.colorName);
      }
    });

    res.json(formatted);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

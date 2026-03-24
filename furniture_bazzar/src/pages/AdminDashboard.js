import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminLogin/Adminlogin.css";
import { useLocation, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const API_BASE = "http://localhost:5000";

  const navigate = useNavigate();
  const location = useLocation();

  const id = new URLSearchParams(location.search).get("id");

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    offer: "no",
    offerPrice: "",
    colorOption: "no",
    colors: [],
    image: null,
  });

  const colorsList = ["Red", "Blue", "Black", "White"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChange = (color) => {
    let updated = [...formData.colors];

    updated.includes(color)
      ? (updated = updated.filter((c) => c !== color))
      : updated.push(color);

    setFormData({
      ...formData,
      colors: updated,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      image: file,
    });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "colors") {
        data.append("colors", JSON.stringify(formData.colors));
      } else {
        data.append(key, formData[key]);
      }
    });

    if (id) {
      await axios.put(`${API_BASE}/api/product/${id}`, data);
      alert("Product Updated Successfully");
    } else {
      await axios.post(`${API_BASE}/api/add-product`, data);
      alert("Product Added Successfully");
    }
    navigate("/?admin=true");
  };

  const fetchProduct = async () => {
    const res = await axios.get(`${API_BASE}/api/product/${id}`);

    const data = res.data;

    setFormData({
      category: data.category,

      name: data.name,

      description: data.description,

      price: data.price,

      offer: data.offerPrice ? "yes" : "no",

      offerPrice: data.offerPrice || "",

      colorOption: data.colorOptions ? "yes" : "no",

      colors: data.colors || [],

      image: null,
    });

    setPreview(data.image);
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="dashboard-page">
      {!id && (
        <button className="edit-items" onClick={() => navigate("/?admin=true")}>
          Edit Items
        </button>
      )}

      <div className="dashboard-card">
        <h2>{id ? "Edit Product" : "Add Product"}</h2>

        <div className="form-grid">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>

            <option>Chairs</option>

            <option>Sofas</option>

            <option>Beds</option>

            <option>CupBoards</option>

            <option>Tables</option>

            <option>Temples</option>
          </select>

          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <select name="offer" value={formData.offer} onChange={handleChange}>
            <option value="no">Offer No</option>

            <option value="yes">Offer Yes</option>
          </select>

          {formData.offer === "yes" && (
            <input
              name="offerPrice"
              placeholder="Offer Price"
              value={formData.offerPrice}
              onChange={handleChange}
            />
          )}

          <select
            name="colorOption"
            value={formData.colorOption}
            onChange={handleChange}
          >
            <option value="no">Color No</option>

            <option value="yes">Color Yes</option>
          </select>

          {formData.colorOption === "yes" && (
            <div className="checkbox-row">
              {colorsList.map((color) => (
                <label key={color}>
                  <input
                    type="checkbox"
                    checked={formData.colors.includes(color)}
                    onChange={() => handleColorChange(color)}
                  />

                  {color}
                </label>
              ))}
            </div>
          )}

          <input type="file" onChange={handleImageUpload} />

          {preview && (
            <img src={preview} alt="preview" className="preview-img" />
          )}
        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          {id ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;

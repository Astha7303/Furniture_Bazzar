import { useState } from "react";
import axios from "axios";
import "./AddOffer.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "Chairs",
  "Sofas",
  "Beds",
  "Tables",
  "CupBoards",
  "DiningTables",
  "Mattress",
  "CoffeeTables",
  "TvCabinets",
];

export default function AddOffer() {
  const [offerType, setOfferType] = useState("single");
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("offerType", offerType);

    await axios.post("http://localhost:5000/api/add-offer", data);

    alert("Offer Added Successfully");
    navigate("/combooffers");
  };

  return (
    <>
      <div>
        <p className="add-offer">Add Offer</p>
      </div>
      <div className="offer-page">
        <div className="offer-card">
          <label>Offer Type : </label>

          <select
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
          >
            <option value="single">Single Discount Offer</option>

            <option value="combo">Combo Offer</option>
          </select>

          {/* single offer */}

          {offerType === "single" && (
            <div className="form-section">
              <h3>Product Details</h3>

              <select name="product1Category" onChange={handleChange}>
                <option>Select Category</option>

                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <input
                name="product1Name"
                placeholder="Product Name"
                onChange={handleChange}
              />

              <textarea
                name="product1Description"
                placeholder="Product details"
                onChange={handleChange}
              />

              <input
                name="product1Price"
                placeholder="Original Price"
                onChange={handleChange}
              />

              <input
                name="comboPrice"
                placeholder="Discount Price"
                onChange={handleChange}
              />

              <input
                name="discountPercent"
                placeholder="Discount %"
                onChange={handleChange}
              />

              <input type="file" name="product1Image" onChange={handleImage} />
            </div>
          )}

          {/* combo offer */}

          {offerType === "combo" && (
            <div className="form-section">
              <h3>Product 1</h3>

              <select name="product1Category" onChange={handleChange}>
                <option>Select Category</option>

                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <input
                name="product1Name"
                placeholder="Product 1 Name"
                onChange={handleChange}
              />

              <textarea
                name="product1Description"
                placeholder="Product 1 details"
                onChange={handleChange}
              />

              <input
                name="product1Price"
                placeholder="Product 1 price"
                onChange={handleChange}
              />

              <input type="file" name="product1Image" onChange={handleImage} />

              <h3>Product 2</h3>

              <select name="product2Category" onChange={handleChange}>
                <option>Select Category</option>

                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <input
                name="product2Name"
                placeholder="Product 2 Name"
                onChange={handleChange}
              />

              <textarea
                name="product2Description"
                placeholder="Product 2 details"
                onChange={handleChange}
              />

              <input
                name="product2Price"
                placeholder="Product 2 price"
                onChange={handleChange}
              />

              <input type="file" name="product2Image" onChange={handleImage} />

              <h3>Offer</h3>

              <input
                name="comboPrice"
                placeholder="Combo Offer Price"
                onChange={handleChange}
              />

              <input
                name="discountPercent"
                placeholder="Discount %"
                onChange={handleChange}
              />
            </div>
          )}

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Offer
          </button>
        </div>
      </div>
    </>
  );
}

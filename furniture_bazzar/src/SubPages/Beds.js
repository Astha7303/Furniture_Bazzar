import React, { useEffect, useState } from "react";
import axios from "axios";
import "./chairs.css";

export default function BedsPage() {
  const [chairs, setChairs] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/Beds")
      .then((res) => setChairs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="chairs-page">
      <h1 className="page-title">Beds Collection</h1>

      <div className="chairs-grid">
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className="chair-card"
            onClick={() => setSelectedProduct(chair)}
          >
            <img src={chair.image} alt={chair.name} className="chair-image" />

            <div className="chair-info">
              <h3>{chair.name}</h3>

              <div className="price-section">
                <span className="offer-price">₹ {chair.offerPrice}</span>

                <span className="actual-price">₹ {chair.price}</span>
              </div>

              {chair.colors?.length > 0 && (
                <div className="color-list">
                  {chair.colors.map((color, i) => (
                    <span
                      key={i}
                      className="color-dot"
                      style={{ background: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={selectedProduct.image} alt="" />
            </div>

            <div className="modal-right">
              <h2>{selectedProduct.name}</h2>

              <p className="description">{selectedProduct.description}</p>

              <div className="price-section">
                <span className="offer-price big">
                  ₹ {selectedProduct.offerPrice}
                </span>

                <span className="actual-price">₹ {selectedProduct.price}</span>
              </div>

              <h3>Product Highlights</h3>

              <ul className="highlights">
                <li>Weight :{selectedProduct.productHighlights?.weight}</li>

                <li>Length :{selectedProduct.productHighlights?.length}</li>

                <li>Height :{selectedProduct.productHighlights?.height}</li>

                <li>
                  Warranty :
                  {selectedProduct.productHighlights?.warrantyInMonths}
                  months
                </li>

                <li>
                  Material :
                  {selectedProduct.productHighlights?.materialTypes?.join(", ")}
                </li>
              </ul>

              {selectedProduct.colors?.length > 0 && (
                <>
                  <h3>Available Colors</h3>

                  <div className="color-list">
                    {selectedProduct.colors.map((color, i) => (
                      <span
                        key={i}
                        className="color-dot big"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

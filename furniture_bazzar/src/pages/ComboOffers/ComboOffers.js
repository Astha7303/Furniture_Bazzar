import { useEffect, useState } from "react";
import "./ComboOffers.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

export default function ComboOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/offers`)
      .then((res) => res.json())

      .then((data) => {
        setOffers(data);
      });
  }, []);

  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <div className="combo-page">
      <h1>Combo Offers</h1>
      {isAdmin && (
        <button
          className="edit-items"
          onClick={() => navigate("/admin/add-offer")}
        >
          Want to Add Offer ?
        </button>
      )}
      <div className="combo-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="combo-card">
            <h2>
              {offer.offerType === "combo" ? "Combo Offer" : "Special Discount"}
            </h2>

            <div className="combo-items">
              <div className="item">
                <img src={offer.product1Image} alt={offer.product1Name}/>

                <p>Product : {offer.product1Name}</p>

                <span>Original Price : ₹{offer.product1Price}</span>
              </div>

              {offer.offerType === "combo" && (
                <div className="item">
                  <img src={offer.product2Image} />

                  <p>Product : {offer.product2Name}</p>

                  <span>Original Price : ₹{offer.product2Price}</span>
                </div>
              )}
            </div>

            <div className="offer-price">
              Combo Offer Price : ₹{offer.comboPrice}
            </div>

            <div className="discount">
              Discount Price : {offer.discountPercent}% OFF
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

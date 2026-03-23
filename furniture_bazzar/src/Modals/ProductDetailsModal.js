import "./Modal.css";
import { useNavigate } from "react-router-dom";

function ProductDetailsModal({ open, handleClose, product }) {
  const navigate = useNavigate();

  if (!open || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal large-modal">
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>

        <div className="product-modal-grid">
          {/* image */}

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
            />
          </div>

          {/* details */}

          <div>
            <h2>{product.name}</h2>

            <p className="modal-desc">{product.description}</p>

            {/* price */}

            <div className="modal-price">
              {product.offerPrice ? (
                <>
                  <span className="old-price">₹{product.price}</span>

                  <span className="offer-price">₹{product.offerPrice}</span>
                </>
              ) : (
                <span className="price">₹{product.price}</span>
              )}
            </div>

            {/* colors */}

            {product.colorOptions && product.colors?.length > 0 && (
              <div className="modal-section">
                <strong>Available Colors</strong>

                <div className="colors">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="color"
                      style={{
                        backgroundColor: color.toLowerCase(),
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* highlights */}

            {product.productHighlights && (
              <div className="modal-section">
                <strong>Product Highlights</strong>

                <ul className="highlight-list">
                  <li>
                    Warranty:
                    {product.productHighlights.warrantyInMonths || "-"}
                    months
                  </li>

                  <li>
                    Length:
                    {product.productHighlights.length || "-"}
                  </li>

                  <li>
                    Material:
                    {product.productHighlights.materialTypes?.join(", ") || "-"}
                  </li>

                  <li>
                    Height:
                    {product.productHighlights.height || "-"}
                  </li>

                  <li>
                    Weight:
                    {product.productHighlights.weight || "-"}
                  </li>
                </ul>
              </div>
            )}

            {/* buttons */}

            <div className="modal-actions">
              <button className="book-now">Book Now</button>

              <button
                className="view-more"
                onClick={() =>
                  navigate(`/${product.furnitureType.toLowerCase()}`)
                }
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;

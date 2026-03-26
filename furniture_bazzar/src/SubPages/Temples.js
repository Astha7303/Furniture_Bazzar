import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/Home/Home.css";

import ProductDetailsModal from "../Modals/ProductDetailsModal";
import DeleteConfirmModal from "../Modals/DeleteConfirmModal";

import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function TemplesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryAdmin =
    new URLSearchParams(location.search).get("admin") === "true";

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const isAdminView = isAdmin && queryAdmin;

  const [chairs, setChairs] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  /* fetch category */

  useEffect(() => {
    axios
      .get(`${API_URL}/api/category/Temples`)
      .then((res) => setChairs(res.data))
      .catch((err) => console.log(err));
  }, []);

  /* open popup */

  const openProduct = (item) => {
    setSelectedProduct(item);

    setOpenModal(true);
  };

  /* edit */

  const handleEdit = (item) => {
    navigate(`/admin/dashboard?id=${item.id}`);
  };

  /* delete */

  const confirmDelete = async () => {
    await axios.delete(`${API_URL}/api/product/${deleteId}`);
    setChairs((prev) => prev.filter((item) => item.id !== deleteId));
    setOpenDeleteModal(false);
    alert("Product Deleted Successfully");
  };

  /* render cards */

  const renderCards = () => {
    return chairs.map((item) => (
      <div
        key={item.id}
        className="product-card"
        onClick={() => openProduct(item)}
      >
        {/* admin buttons */}

        {isAdminView && (
          <div className="admin-icons">
            <button
              className="edit-btn"
              onClick={(e) => {
                e.stopPropagation();

                handleEdit(item);
              }}
            >
              ✏
            </button>

            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();

                setDeleteId(item.id);

                setOpenDeleteModal(true);
              }}
            >
              🗑
            </button>
          </div>
        )}

        {/* image */}

        <img src={item.image} alt={item.name} className="product-img" />

        {/* content */}

        <div className="card-body">
          <h3>{item.name}</h3>

          <p className="desc">{item.description}</p>

          {/* price */}

          <div className="price-row">
            {item.offerPrice ? (
              <>
                <span className="old-price">₹{item.price}</span>

                <span className="offer-price">₹{item.offerPrice}</span>
              </>
            ) : (
              <span className="price">₹{item.price}</span>
            )}
          </div>

          {/* colors */}

          {item.colorOptions && item.colors?.length > 0 && (
            <div className="color-box">
              <span className="color-title">Colors Available</span>

              <div className="colors">
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    className="color"
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section className="web-section">
      {/* heading */}

      <div className="section-header">
        <h2>Temples Collection</h2>
      </div>

      {/* cards */}

      <div className="card-sections">{renderCards()}</div>

      {/* delete popup */}

      <DeleteConfirmModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      {/* product popup */}

      <ProductDetailsModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        product={selectedProduct}
      />
    </section>
  );
}

export default TemplesPage;

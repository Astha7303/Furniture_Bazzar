import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDetailsModal from "../../Modals/ProductDetailsModal";
import DeleteConfirmModal from "../../Modals/DeleteConfirmModal";
import Loader from "../../components/Loader/Loader";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryAdmin =
    new URLSearchParams(location.search).get("admin") === "true";

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const isAdminView = isAdmin && queryAdmin;

  const API_BASE = "http://localhost:5000";

  const [chairs, setChairs] = useState([]);
  const [bed, setBed] = useState([]);
  const [cupboards, setCupboards] = useState([]);
  const [sofa, setSofa] = useState([]);
  const [temples, setTemples] = useState([]);
  const [tables, setTables] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [deleteId, setDeleteId] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/furniture`);
      setLoading(true);
      const data = res.data;

      setChairs(data.Chairs || []);
      setBed(data.Beds || []);
      setCupboards(data.CupBoards || []);
      setSofa(data.Sofas || []);
      setTemples(data.Temples || []);
      setTables(data.Tables || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const confirmDelete = async () => {
    try {
      await axios.delete(`${API_BASE}/api/product/${deleteId}`);
      setChairs((prev) => prev.filter((item) => item.id !== deleteId));
      setOpenDeleteModal(false);
      alert("Product Deleted Successfully");
      getdata();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (item) => {
    navigate(`/admin/dashboard?id=${item.id}`);
  };

  const openProduct = (item) => {
    setSelectedProduct(item);
    setOpenModal(true);
  };

  const renderCards = (data) => {
    return data.map((item) => (
      <div
        key={item.id}
        className="product-card"
        onClick={() => openProduct(item)}
      >
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

        <img src={item.image} alt={item.name} className="product-img" />

        <div className="card-body">
          <h3>{item.name}</h3>

          <p className="desc">{item.description}</p>

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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="web-section">
        <div className="section-header">
          <h2>Chairs</h2>

          <button
            className="view-btn"
            onClick={() => {
              isAdminView
                ? navigate("/chairs?admin=true")
                : navigate("/chairs");
            }}
          >
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(chairs)}</div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Sofas</h2>

          <button className="view-btn" onClick={() => navigate("/sofas")}>
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(sofa)}</div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>CupBoards</h2>

          <button className="view-btn" onClick={() => navigate("/cupboards")}>
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(cupboards)}</div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Beds</h2>

          <button className="view-btn" onClick={() => navigate("/beds")}>
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(bed)}</div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Temples</h2>

          <button className="view-btn" onClick={() => navigate("/temples")}>
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(temples)}</div>
      </section>

      <section className="web-section">
        <div className="section-header">
          <h2>Tables</h2>

          <button className="view-btn" onClick={() => navigate("/tables")}>
            View more
          </button>
        </div>

        <div className="card-sections">{renderCards(tables)}</div>
      </section>

      <DeleteConfirmModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <ProductDetailsModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        product={selectedProduct}
      />
    </>
  );
}

export default Home;

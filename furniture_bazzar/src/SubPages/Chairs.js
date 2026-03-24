// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./chairs.css";

// export default function ChairsPage() {
//   const [chairs, setChairs] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/category/Chairs")
//       .then((res) => setChairs(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="chairs-page">
//       <h1 className="page-title">Chairs Collection</h1>

//       {/* grid */}

//       <div className="chairs-grid">
//         {chairs.map((chair) => (
//           <div
//             key={chair.id}
//             className="chair-card"
//             onClick={() => setSelectedProduct(chair)}
//           >
//             <img src={chair.image} alt={chair.name} className="chair-image" />

//             <div className="chair-info">
//               <h3>{chair.name}</h3>

//               <div className="price-row">
//                 {chair.offerPrice ? (
//                   <>
//                     <span className="old-price">₹{chair.price}</span>

//                     <span className="offer-price">₹{chair.offerPrice}</span>
//                   </>
//                 ) : (
//                   <span className="price">₹{chair.price}</span>
//                 )}
//               </div>

//               {/* colors */}

//               {chair.colors?.length > 0 && (
//                 <div className="colors">
//                   {chair.colors.map((color, i) => (
//                     <span
//                       key={i}
//                       className="color"
//                       style={{
//                         background: color,
//                       }}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* modal */}

//       {selectedProduct && (
//         <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
//           <div
//             className="modal large-modal"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="close-btn"
//               onClick={() => setSelectedProduct(null)}
//             >
//               ✕
//             </button>

//             <div className="product-modal-grid">
//               {/* image */}

//               <img src={selectedProduct.image} alt="" className="modal-image" />

//               {/* details */}

//               <div>
//                 <h2>{selectedProduct.name}</h2>

//                 <p className="modal-desc">{selectedProduct.description}</p>

//                 {/* price */}

//                 <div className="modal-price">
//                   {selectedProduct.offerPrice ? (
//                     <>
//                       <span className="old-price">
//                         ₹{selectedProduct.price}
//                       </span>

//                       <span className="offer-price big">
//                         ₹{selectedProduct.offerPrice}
//                       </span>
//                     </>
//                   ) : (
//                     <span className="price big">₹{selectedProduct.price}</span>
//                   )}
//                 </div>

//                 {/* highlights */}

//                 <h3>Product Highlights</h3>

//                 <ul className="highlight-list">
//                   <li>
//                     Weight :{selectedProduct.productHighlights?.weight || "-"}
//                   </li>

//                   <li>
//                     Length :{selectedProduct.productHighlights?.length || "-"}
//                   </li>

//                   <li>
//                     Height :{selectedProduct.productHighlights?.height || "-"}
//                   </li>

//                   <li>
//                     Warranty :
//                     {selectedProduct.productHighlights?.warrantyInMonths}
//                     months
//                   </li>

//                   <li>
//                     Material :
//                     {selectedProduct.productHighlights?.materialTypes?.join(
//                       ", ",
//                     ) || "-"}
//                   </li>
//                 </ul>

//                 {/* colors */}

//                 {selectedProduct.colors?.length > 0 && (
//                   <>
//                     <h3>Available Colors</h3>

//                     <div className="colors">
//                       {selectedProduct.colors.map((color, i) => (
//                         <span
//                           key={i}
//                           className="color big"
//                           style={{
//                             background: color,
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import "../pages/Home/Home.css";

import ProductDetailsModal from "../Modals/ProductDetailsModal";
import DeleteConfirmModal from "../Modals/DeleteConfirmModal";

import { useLocation, useNavigate } from "react-router-dom";

function ChairsPage() {
  const API_BASE = "http://localhost:5000";

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
      .get(`${API_BASE}/api/category/Chairs`)
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
    await axios.delete(`${API_BASE}/api/product/${deleteId}`);
    setChairs((prev) => prev.filter((item) => item.id !== deleteId));
    setOpenDeleteModal(false);
      alert("Product Deleted Successfully")
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
        <h2>Chairs Collection</h2>
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

export default ChairsPage;

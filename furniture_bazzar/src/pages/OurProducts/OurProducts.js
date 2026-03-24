import "./OurProducts.css";
import { useNavigate } from "react-router-dom";
import chair from "../../images/chair.webp";
import sofa from "../../images/sofa.webp";
import bed from "../../images/bed.jpg";
import table from "../../images/table.jpg";
import temple from "../../images/temple.webp";
import cupboard from "../../images/cupboard.jpg";

import library from "../../images/library.jpg";
import kitchen from "../../images/kitchen.jpg";
import livingroom from "../../images/livingroom.jpg";
import studyroom from "../../images/studyroom.webp";
import office from "../../images/office.jpg";
import bedroom from "../../images/bedroom.jpg";

function OurProducts() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Chairs",
      img: chair,
      link: "/chairs",
    },

    {
      name: "Beds",
      img: bed,
      link: "/beds",
    },

    {
      name: "Sofas",
      img: sofa,
      link: "/sofas",
    },

    {
      name: "Tables",
      img: table,
      link: "/tables",
    },

    {
      name: "CupBoards",
      img: cupboard,
      link: "/cupboards",
    },

    {
      name: "Temples",
      img: temple,
      link: "/temples",
    },
  ];

  const roomTypes = [
    {
      name: "Bedroom Furniture",
      img: bedroom,
      link: "/bedroomfurniture",
    },

    {
      name: "Kitchen Furniture",
      img: kitchen,
      link: "/kitchenfurniture",
    },
    
    {
      name: "Library Furniture",
      img: library,
      link: "/libraryfurniture",
    },

    {
      name: "Living Room Furniture",
      img: livingroom,
      link: "/livingroomfurniture",
    },

    {
      name: "Office Furniture",
      img: office,
      link: "/officefurniture",
    },

    {
      name: "Study Room Furniture",
      img: studyroom,
      link: "/studyroomfurniture",
    },
  ];

  return (
    <div className="products-page">
      {/* hero */}

      <div className="products-hero">
        <h1>Our Products</h1>

        <p>Explore our wide range of premium furniture categories.</p>
      </div>

      {/* category cards */}

      <section className="products-section">
        <h2>Furniture Categories</h2>

        <div className="products-grid">
          {categories.map((item) => (
            <div
              key={item.name}
              className="category-card"
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.name} />

              <div className="overlay">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* room furniture */}

      <section className="products-section">
        <h2>Furniture By Room</h2>

        <div className="products-grid">
          {roomTypes.map((item) => (
            <div
              key={item.name}
              className="room-card"
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.name} />

              <div className="overlay">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurProducts;

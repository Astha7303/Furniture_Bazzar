import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import bed from "../../images/bed.jpg";
import cupboard from "../../images/cupboard.jpg";
import table from "../../images/table.jpg";
import chair from "../../images/chair.webp";
import sofa from "../../images/sofa.webp";
import sidetable from "../../images/side-table.jpg";
import balconychair from "../../images/balcony-chair.jpg";
import mattress from "../../images/mattress.jpg";
import workdesks from "../../images/workdesks.webp";
import coffeetable from "../../images/coffeetable.webp";
import dressingtable from "../../images/dressingtable.jpg";
import bookshelfbedroom from "../../images/bookshelfbedroom.jpg";

function BedroomFurniture() {
  const navigate = useNavigate();

  const bedroomItems = [
    {
      name: "Beds",
      img: bed,
      link: "/beds",
    },

    {
      name: "Cupboards",
      img: cupboard,
      link: "/cupboards",
    },

    {
      name: "Side Tables",
      img: sidetable,
      link: "/sidetables",
    },

    {
      name: "Chairs",
      img: chair,
      link: "/chairs",
    },

    {
      name: "Sofas",
      img: sofa,
      link: "/sofas",
    },
    {
      name: "Dressing Table",
      img: dressingtable,
      link: "/dressingtables",
    },

    {
      name: "Balcony Chairs",
      img: balconychair,
      link: "/balconychairs",
    },

    {
      name: "Work Desk",
      img: workdesks,
      link: "/workdesks",
    },

    {
      name: "Mattress",
      img: mattress,
      link: "/mattress",
    },
    {
      name: "Book Shelf",
      img: bookshelfbedroom,
      link: "/bookshelfs",
    },
    {
      name: "Coffee Table",
      img: coffeetable,
      link: "/coffeetables",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>Bedroom Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your bedroom.
        </p>
      </div>

      {/* cards */}

      <div className="room-grid">
        {bedroomItems.map((item) => (
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
    </div>
  );
}

export default BedroomFurniture;

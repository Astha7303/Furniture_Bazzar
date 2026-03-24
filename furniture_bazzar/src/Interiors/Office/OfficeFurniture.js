import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import chair from "../../images/chair.webp";
import sofa from "../../images/sofa.webp";
import bookshelflibrary from "../../images/bookshelflibrary.jpg";
import workdesk from "../../images/workdesks.webp";
import coffeetable from "../../images/coffeetable.webp";

function OfficeFurniture() {
  const navigate = useNavigate();

  const officeItems = [
    {
      name: "Sofa",
      img: sofa,
      link: "/sofas",
    },
    {
      name: "Chairs",
      img: chair,
      link: "/chairs",
    },
    {
      name: "Work Desk",
      img: workdesk,
      link: "/workdesks",
    },
    {
      name: "Coffee Table",
      img: coffeetable,
      link: "/coffeetables",
    },
    {
      name: "Book/Files Shelf",
      img: bookshelflibrary,
      link: "/bookshelfs",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>Office Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your Office.
        </p>
      </div>

      {/* cards */}

      <div className="room-grid">
        {officeItems.map((item) => (
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

export default OfficeFurniture;

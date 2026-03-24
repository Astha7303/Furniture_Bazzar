import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import sofa from "../../images/sofa.webp";
import sidetable from "../../images/side-table.jpg";
import balconychairs from "../../images/balcony-chair.jpg";
import coffeetable from "../../images/coffeetable.webp";
import chair from "../../images/chair.webp";
import rockingchair from "../../images/rockingchair.jpg";
import tvcabinet from "../../images/tvcabinet.jpg";
import displaycabinet from "../../images/displaycabinet.jpg";

function LivingroomFurniture() {
  const navigate = useNavigate();

  const livingroomItems = [
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
      name: "Balcony Chairs",
      img: balconychairs,
      link: "/balconychairs",
    },
    {
      name: "Side Table",
      img: sidetable,
      link: "/sidetables",
    },
    {
      name: "Coffee Table",
      img: coffeetable,
      link: "/coffeetables",
    },
    {
      name: "Rocking Chair",
      img: rockingchair,
      link: "/rockingchairs",
    },
    {
      name: "TV Cabinet",
      img: tvcabinet,
      link: "/tvcabinets",
    },
    {
      name: "Display Cabinet",
      img: displaycabinet,
      link: "/displaycabinet",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>LivingRoom Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your Living Room.
        </p>
      </div>

      {/* cards */}

      <div className="room-grid">
        {livingroomItems.map((item) => (
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

export default LivingroomFurniture;

import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import diningtable from "../../images/diningtable.jpg";
import kitchencabinet from "../../images/kitchencabinet.jpg";
import highchair from "../../images/highchairs.jpg";
import kitchensideboard from "../../images/kitchensideboard.jpg";

function KitchenFurniture() {
  const navigate = useNavigate();

  const kitchenItems = [
    {
      name: "Dining Table",
      img: diningtable,
      link: "/diningtable",
    },
    {
      name: "Kitchen Cabinets",
      img: kitchencabinet,
      link: "/kitchencabinet",
    },
    {
      name: "High Chair/Stool",
      img: highchair,
      link: "/highchair",
    },
    {
      name: "Side Board",
      img: kitchensideboard,
      link: "/sideboard",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>Kitchen Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your Kitchen.
        </p>
      </div>

      {/* cards */}

      <div className="room-grid">
        {kitchenItems.map((item) => (
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

export default KitchenFurniture;

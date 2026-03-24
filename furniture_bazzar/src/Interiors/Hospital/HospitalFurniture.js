import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import equipmentcupboard from "../../images/equipmentcupboard.webp";
import examinationtable from "../../images/examinationtable.webp";
import highchair from "../../images/highchairs.jpg";
import pediatricbed from "../../images/pediatricbed.jpg";
import waitingbench from "../../images/waitingbench.jpg";

function HospitalFurniture() {
  const navigate = useNavigate();

  const kitchenItems = [
    {
      name: "Equipment Cupboardl",
      img: equipmentcupboard,
      link: "/hospitalfurnish",
    },
    {
      name: "High Chair/Stool",
      img: highchair,
      link: "/highchair",
    },
    {
      name: "Examination Table",
      img: examinationtable,
      link: "/hospitalfurnish",
    },
    {
      name: "Pediatric Bed",
      img: pediatricbed,
      link: "/hospitalfurnish",
    },
    {
      name: "Waiting/Lobbyroom Bench",
      img: waitingbench,
      link: "/hospitalfurnish",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>Hospital Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your Hospital.
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

export default HospitalFurniture;

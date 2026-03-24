import "../RoomFurniture.css";
import { useNavigate } from "react-router-dom";
import bookshelflibrary from "../../images/bookshelflibrary.jpg";
import singlestudychair from "../../images/singlestudychair.jpg";
import workdesks from "../../images/workdesks.webp";
import studycabinets from "../../images/studycabinets.webp";
import chair from "../../images/chair.webp";

function LibraryFurniture() {
  const navigate = useNavigate();

  const libraryItems = [
    {
      name: "Book Shelfs",
      img: bookshelflibrary,
      link: "/bookshelfs",
    },
    {
      name: "Single Study Chairs",
      img: singlestudychair,
      link: "/singlestudychair",
    },
    {
      name: "Study Cabinets",
      img: studycabinets,
      link: "/studycabinets",
    },
    {
      name: "Personal Work Desk",
      img: workdesks,
      link: "/workdesks",
    },
    {
      name: "Chairs",
      img: chair,
      link: "/chairs",
    },
  ];

  return (
    <div className="room-page">
      {/* heading */}

      <div className="room-hero">
        <h1>Library Furniture</h1>

        <p>
          Discover furniture designed for comfort, storage, and relaxation in
          your Library.
        </p>
      </div>

      {/* cards */}

      <div className="room-grid">
        {libraryItems.map((item) => (
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

export default LibraryFurniture;

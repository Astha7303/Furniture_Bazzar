import { useState, useRef, useEffect } from "react";
import "./SubHeader.css";
import { useNavigate } from "react-router-dom";

const menuData = {
  products: [
    { menu: "Bedroom", link: "/bedroomfurniture" },
    { menu: "Living Room", link: "/livingroomfurniture" },
    { menu: "Kitchen", link: "/kitchenfurniture" },
    { menu: "Office", link: "/officefurniture" },
    { menu: "Library", link: "/libraryfurniture" },
    { menu: "Studyroom", link: "/studyroomfurniture" },
    { menu: "Hospital", link: "/hospitalfurniture" },
  ],
  newArrivals: [
    { menu: "Latest Beds", link: "/beds" },
    { menu: "Modern Sofas", link: "/sofas" },
    { menu: "Trending Chairs", link: "/chairs" },
  ],
  deals: [
    { menu: "Discount in Beds", link: "/beds" },
    { menu: "Combo Offers", link: "/combooffers" },
  ],
  ask: [
    { menu: "Customised Furniture", link: "/customisedfurniture" },
    { menu: "Our service", link: "/ourservice" },
  ],
};

export default function SubHeader() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);

  const wrapperRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!wrapperRef.current.contains(event.target)) {
        setClickedMenu(null);
        setHoveredMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleClickMenu = (menu) => {
    if (clickedMenu === menu) {
      setClickedMenu(null);
    } else {
      setClickedMenu(menu);
    }
  };
  const navigate = useNavigate();
  const renderMenu = (key, label) => {
    const isOpen = hoveredMenu === key || clickedMenu === key;

    return (
      <div
        className="menu-wrapper"
        onMouseEnter={() => setHoveredMenu(key)}
        onMouseLeave={() => setHoveredMenu(null)}
        onClick={() => toggleClickMenu(key)}
      >
        <div className="menu-item">{label}</div>

        {isOpen && (
          <div className="dropdown">
            {menuData[key].map((item, i) => (
              <p key={i} onClick={() => navigate(`${item.link}`)}>
                {item.menu}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="subheader" ref={wrapperRef}>
      {renderMenu("products", "Product Category")}
      {renderMenu("newArrivals", "New Arrivals")}
      {renderMenu("deals", "Deal Zone")}
      {renderMenu("ask", "Ask Anything")}
    </div>
  );
}

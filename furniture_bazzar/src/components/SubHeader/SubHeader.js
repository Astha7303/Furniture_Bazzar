import { useState, useRef, useEffect } from "react";
import "./SubHeader.css";

const menuData = {
  products: ["Bedroom", "Living Room", "Kitchen", "Office"],
  newArrivals: ["Latest Beds", "Modern Sofas", "Trending Chairs"],
  deals: ["Discount Beds", "Combo Offers", "Clearance Sale"],
  ask: ["Custom Furniture", "Bulk Order", "Material Info"],
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
              <p key={i}>{item}</p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="subheader" ref={wrapperRef}>
      {renderMenu("products", "Our Products")}

      {renderMenu("newArrivals", "New Arrivals")}

      {renderMenu("deals", "Deal Zone")}

      {renderMenu("ask", "Ask Anything")}
    </div>
  );
}

import './subNavBar.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";

const data = [
  {
    label: "ALL",
    to: "/BarChart",
  },
  {
    label: "CLOTHING",
    to: "/Clothing",
  },
  {
    label: "FOOTWEAR",
    to: "/Footwear",
  },
  {
    label: "ACCESSORIES",
    to: "/Accessories",
  },
];
const SubNav = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="subnav">
      {/* <ul className="subnav-list">
        <li className="subnav-item">ALL</li>
        <li className="subnav-item">CLOTHING</li>
        <li className="subnav-item">FOOTWEAR</li>
        <li className="subnav-item">ACCESS0RIES</li>
      </ul> */}

      <ul
        className={`subnav-list ${toggleIcon ? "active" : ""} `}
      >
        {data.map((item, key) => (
          <li key={key} className="subnav-item">
            <Link
              className="subnav-item-links"
              to={item.to}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default SubNav;

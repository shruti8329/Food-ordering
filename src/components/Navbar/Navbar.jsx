import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowlogin }) => {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/add-category">ADD CATEGORY</Link>
        </li>
        <li>
          <Link to="/product-list">PRODUCT LIST</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

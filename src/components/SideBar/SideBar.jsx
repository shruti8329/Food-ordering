import React, { useState } from "react";
import "./SideBar.css";
import { chineseDishes } from "../../assets/assets";

const Sidebar = ({ chineseDishes, handleProductClick }) => {
  return (
    <div className="sidebar">
      <button onClick={() => handleProductClick(null)}>ALL</button>
      <ul>
        {chineseDishes.map((dish) => (
          <li key={dish.id} onClick={() => handleProductClick(dish)}>
            {dish.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

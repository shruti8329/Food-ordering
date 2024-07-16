import React, { useState } from "react";
import { chineseDishes } from "../../assets/assets";
import "./ProductList.css";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import FoodDetail from "../FoodDetail/FoodDetail";

const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductClick = (product) => {
    if (product === null) {
      setSelectedProducts(chineseDishes);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.some((p) => p.id === product.id)
          ? prevSelected
          : [...prevSelected, product]
      );
    }
  };

  const calculateTotal = (product) => {
    if (!product) return 0;
    return (
      (product.mrp - product.discount + product.taxAmount) *
      product.quantity
    ).toFixed(2);
  };

  return (
    <div className="product-list">
      <div className="header">
        <h1>Chinese Valley</h1>
        <button>Order</button>
        <button>Today's Sale</button>
      </div>
      <div className="content">
        <Sidebar
          chineseDishes={chineseDishes}
          handleProductClick={handleProductClick}
        />
        <div className="main">
          <FoodDetail
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            calculateTotal={calculateTotal}
          />
        </div>
      </div>
      <div className="footer">
        <Link to="/">Go to Home Page </Link>
      </div>
    </div>
  );
};

export default ProductList;

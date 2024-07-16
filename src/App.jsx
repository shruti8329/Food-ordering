import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./components/Loginpage/Loginpage";
import HomePage from "./components/HomePage/HomePage";
import AddCategory from "./components/AddCategory/AddCategory";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import { chineseDishes } from "./assets/assets";

const App = () => {
  const [categories, setCategories] = useState(chineseDishes);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const editCategory = (id, newName) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id ? { ...category, name: newName } : category
      )
    );
  };

  const deleteCategory = (id) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const calculateTotal = (product) => {
    const total =
      product.mrp * product.quantity - product.discount + product.taxAmount;
    return total.toFixed(2);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login-page" element={<Loginpage />} />

          <Route
            path="/add-category"
            element={
              <AddCategory addCategory={addCategory} categories={categories} />
            }
          />
          <Route
            path="/category-list"
            element={
              <CategoryList
                categories={categories}
                editCategory={editCategory}
                deleteCategory={deleteCategory}
              />
            }
          />
          <Route
            path="/product-list"
            element={
              <ProductList
                selectedProduct={selectedProduct}
                calculateTotal={calculateTotal}
                handleProductClick={handleProductClick}
                chineseDishes={chineseDishes}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

App.js;

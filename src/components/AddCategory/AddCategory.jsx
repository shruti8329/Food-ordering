import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddCategory.css";
import { chineseDishes } from "../../assets/assets";
const AddCategory = ({ addCategory, categories }) => {
  const [categoryName, setCategoryName] = useState("");
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const validChineseDishes = chineseDishes.map((dish) => dish.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = categories.some(
      (category) => category.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (isDuplicate) {
      alert("Category with this name already exists.");
      return;
    }

    if (!isValidCategoryName(categoryName)) {
      alert(
        "Invalid category name. Please enter a valid Chinese dish or noodle name."
      );
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      status: status,
    };
    addCategory(newCategory);
    navigate("/category-list");
  };

  const isValidCategoryName = (name) => {
    if (
      name.toLowerCase().includes("noodle") ||
      validChineseDishes.includes(name)
    ) {
      return true;
    }
  };

  return (
    <div className="addcategory-background">
      <div className="addcategory-container">
        <h2 className="heading">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="categoryName" className="label">
              Category Name *
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Status *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="radio-input"
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                  className="radio-input"
                />
                Inactive
              </label>
            </div>
          </div>
          <button type="submit" className="button">
            Save
          </button>
        </form>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default AddCategory;

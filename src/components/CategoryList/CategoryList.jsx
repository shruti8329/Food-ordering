// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import "./CategoryList.css";
// import Navbar from "../Navbar/Navbar";

// const CategoryList = ({ categories, editCategory, deleteCategory }) => {
//   const [visibleCategories, setVisibleCategories] = useState(categories);

//   const handleEdit = (id) => {
//     const newName = prompt("Enter new name:", "");
//     if (newName !== null) {
//       const newStatus = prompt("Enter new status (Active or Inactive):", "");
//       if (
//         newStatus !== null &&
//         (newStatus === "Active" || newStatus === "Inactive")
//       ) {
//         editCategory(id, newName, newStatus);
//         setVisibleCategories((prevCategories) =>
//           prevCategories.map((category) =>
//             category.id === id
//               ? { ...category, name: newName, status: newStatus }
//               : category
//           )
//         );
//       } else {
//         alert("Invalid status. Please enter 'Active' or 'Inactive'.");
//       }
//     }
//   };

//   const handleDelete = (id) => {
//     deleteCategory(id);
//     setVisibleCategories(
//       visibleCategories.filter((category) => category.id !== id)
//     );
//   };

//   return (
//     <div className="main-page">
//       <Navbar setShowlogin={() => {}} />
//       <div className="category-container">
//         <h1 className="category-heading">CATEGORY LIST</h1>
//         <table className="category-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Category Name</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visibleCategories.map((category, index) => (
//               <tr key={category.id}>
//                 <td>{index + 1}</td>
//                 <td>{category.name}</td>
//                 <td>{category.status}</td>
//                 <td>
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEdit(category.id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(category.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <br />
//         <Link to="/">Go to Home Page</Link>{" "}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./CategoryList.css";
import Navbar from "../Navbar/Navbar";

const CategoryList = ({
  categories,
  editCategory,
  deleteCategory,
  addCategory,
}) => {
  const [visibleCategories, setVisibleCategories] = useState(categories);

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:", "");
    if (newName !== null) {
      const newStatus = prompt("Enter new status (Active or Inactive):", "");
      if (
        newStatus !== null &&
        (newStatus === "Active" || newStatus === "Inactive")
      ) {
        editCategory(id, newName, newStatus);
        setVisibleCategories((prevCategories) =>
          prevCategories.map((category) =>
            category.id === id
              ? { ...category, name: newName, status: newStatus }
              : category
          )
        );
      } else {
        alert("Invalid status. Please enter 'Active' or 'Inactive'.");
      }
    }
  };

  const handleDelete = (id) => {
    deleteCategory(id);
    setVisibleCategories(
      visibleCategories.filter((category) => category.id !== id)
    );
  };

  const handleAdd = () => {
    const newName = prompt("Enter new category name:", "");
    if (newName !== null) {
      const newStatus = prompt("Enter new status (Active or Inactive):", "");
      if (
        newStatus !== null &&
        (newStatus === "Active" || newStatus === "Inactive")
      ) {
        addCategory(newName, newStatus);
        setVisibleCategories((prevCategories) => [
          ...prevCategories,
          { id: prevCategories.length + 1, name: newName, status: newStatus },
        ]);
      } else {
        alert("Invalid status. Please enter 'Active' or 'Inactive'.");
      }
    }
  };

  return (
    <div className="main-page">
      <Navbar setShowlogin={() => {}} />
      <div className="category-container">
        <h1 className="category-heading">CATEGORY LIST</h1>
        <table className="category-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleCategories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{category.status}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(category.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Link to="/">Go to Home Page</Link>{" "}
      </div>
    </div>
  );
};

export default CategoryList;

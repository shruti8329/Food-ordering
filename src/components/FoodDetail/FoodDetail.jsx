import React, { useState } from "react";
import "./FoodDetail.css";
import { chineseDishes } from "../../assets/assets";

const FoodDetail = ({
  selectedProducts,
  setSelectedProducts,
  calculateTotal,
}) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [billGenerated, setBillGenerated] = useState(false);

  const calculateDiscount = (mrp, discountPercentage = 10) => {
    return (mrp * discountPercentage) / 100;
  };

  const calculateGrandTotal = () => {
    return selectedProducts
      .reduce((total, product) => {
        return total + parseFloat(calculateTotal(product));
      }, 0)
      .toFixed(2);
  };

  const calculateTotalTaxAmount = () => {
    return selectedProducts
      .reduce(
        (total, product) => total + product.taxAmount * product.quantity,
        0
      )
      .toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  const calculateTotalMRPDiscount = () => {
    return selectedProducts
      .reduce(
        (total, product) => total + product.discount * product.quantity,
        0
      )
      .toFixed(2);
  };

  const handleEditChange = (e, field, productId) => {
    const value = parseFloat(e.target.value);
    setSelectedProducts((prevSelected) =>
      prevSelected.map((product) =>
        product.id === productId
          ? {
              ...product,
              [field]: value,
              discount:
                field === "mrp" ? calculateDiscount(value) : product.discount,
            }
          : product
      )
    );
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
  };

  const handleDelete = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((product) => product.id !== productId)
    );
  };

  const handleSave = () => {
    setEditingProduct(null);
  };

  const handleGenerateBill = () => {
    setBillGenerated(true);
  };

  const handlePrintBill = () => {
    window.print();
  };

  return (
    <div className="food-detail">
      {selectedProducts.length > 0 ? (
        <>
          <div className="product-images">
            {selectedProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <div className="details-container">
            <div className="payment-section">
              <table>
                <thead>
                  <tr>
                    <th>Chinese Info</th>
                    <th>Tax Amount</th>
                    <th>Quantity</th>
                    <th>M.R.P.</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>
                        {editingProduct === product.id ? (
                          <input
                            type="number"
                            value={product.taxAmount}
                            onChange={(e) =>
                              handleEditChange(e, "taxAmount", product.id)
                            }
                          />
                        ) : (
                          product.taxAmount
                        )}
                      </td>
                      <td>
                        {editingProduct === product.id ? (
                          <input
                            type="number"
                            value={product.quantity}
                            onChange={(e) =>
                              handleEditChange(e, "quantity", product.id)
                            }
                          />
                        ) : (
                          product.quantity
                        )}
                      </td>
                      <td>
                        {editingProduct === product.id ? (
                          <input
                            type="number"
                            value={product.mrp}
                            onChange={(e) =>
                              handleEditChange(e, "mrp", product.id)
                            }
                          />
                        ) : (
                          product.mrp
                        )}
                      </td>
                      <td>{product.discount.toFixed(2)}</td>
                      <td>{calculateTotal(product)}</td>
                      <td>
                        {editingProduct === product.id ? (
                          <button className="edit-button" onClick={handleSave}>
                            Save
                          </button>
                        ) : (
                          <button
                            className="edit-button"
                            onClick={() => handleEdit(product)}
                          >
                            Edit
                          </button>
                        )}
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="payment-buttons">
                <button onClick={handleGenerateBill}>Generate Bill</button>
              </div>
            </div>
            {billGenerated && (
              <div className="bill-section" id="bill-section">
                <h2>Receipt</h2>
                <div className="bill-items">
                  {selectedProducts.map((product) => (
                    <p key={product.id}>
                      {product.name} - {product.quantity} pcs
                    </p>
                  ))}
                </div>
                <p>Total Tax Amount: {calculateTotalTaxAmount()}</p>
                <p>Total Quantity: {calculateTotalQuantity()}</p>
                <p>Total MRP Discount: {calculateTotalMRPDiscount()}</p>
                <p className="total">Grand Total: {calculateGrandTotal()}</p>
                <p className="thankyou">Thank you for your purchase!</p>
                <button onClick={handlePrintBill}>Print Bill</button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="product-images">
          {chineseDishes.map((dish) => (
            <div key={dish.id} className="product-item">
              <img src={dish.image} alt={dish.name} />
              <p>{dish.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDetail;

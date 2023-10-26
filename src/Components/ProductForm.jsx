import React, { useState } from "react";
import "./ProductForm.css";
import Button from "./UI/Button";

function ProductForm(props) {
  const [enteredInput, setEnteredInput] = useState({
    productId: "",
    sellingPrice: "",
    productName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEnteredInput((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Retrive previous stored data
    const existingData = JSON.parse(localStorage.getItem("productData")) || [];
    //Update the Data
    const updateData = [...existingData, enteredInput];
    //stor updatedData in local storage
    localStorage.setItem("productData", JSON.stringify(updateData));
    setEnteredInput({ productId: "", sellingPrice: "", productName: "" });
    props.onSaveProductData(enteredInput);
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={formSubmitHandler} className="form">
          <label htmlFor="productId">
            Product Id:{" "}
            <input
              type="number"
              name="productId"
              id="productId"
              onChange={handleChange}
              value={enteredInput.productId}
            />
          </label>

          <label htmlFor="sellingPrice">
            Selling Price:{" "}
            <input
              type="number"
              name="sellingPrice"
              id="sellingPrice"
              onChange={handleChange}
              value={enteredInput.sellingPrice}
            />
          </label>

          <label htmlFor="productName">
            Product Name:
            <input
              type="text"
              name="productName"
              id="productName"
              onChange={handleChange}
              value={enteredInput.productName}
            />
          </label>
          <Button type="submit" value="Add Product" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default ProductForm;

import React from "react";
import ProductForm from "./ProductForm";

function NewProduct(props) {
  const saveProductDataHandler = (newProductData) => {
    props.onAddProduct(newProductData);
  };
  return (
    <React.Fragment>
      <ProductForm onSaveProductData={saveProductDataHandler} />
    </React.Fragment>
  );
}

export default NewProduct;

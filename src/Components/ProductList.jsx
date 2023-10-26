import React, { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import Button from "./UI/Button";
import "./ProductList.css";
import Card from "./UI/Card";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("productData"));
    if (storedProduct && storedProduct.length > 0) {
      setProductList(storedProduct);
      setProductCount((previousCnt) => previousCnt + 1);
    }
  }, []);

  useEffect(() => {
    const totalSum = productList.reduce((total, product) => {
      return total + Number(product.sellingPrice || 0);
    }, 0);
    setTotalPrice(totalSum);
  }, [productList]);

  const addProductHandler = (newProductData) => {
    setProductList((previousState) => {
      return [...previousState, newProductData];
    });
  };

  const delteHandler = (productId) => {
    const updateProductList = productList.filter(
      (product) => product.productId != productId
    );
    localStorage.setItem("productData", JSON.stringify(updateProductList));
    setProductList(updateProductList);
  };

  return (
    <React.Fragment>
      <NewProduct onAddProduct={addProductHandler} />
      {productCount > 0 && (
        <Card>
          {productList.length > 0 &&
            productList.map((product, idx) => {
              if (product) {
                const { productId, sellingPrice, productName } = product;
                return (
                  <div key={idx} className="product-list-container">
                    <div className="product-item">
                      <p key={productId}>{productId}.</p>
                      <p>{productName}</p>
                      <p>{sellingPrice}</p>
                      <Button
                        value="Delete"
                        onDelete={() => delteHandler(productId)}
                      />
                    </div>
                  </div>
                );
              }
            })}
        </Card>
      )}
      <div className="product-list-container">
        <p>Toatal Price: {totalPrice}</p>
      </div>
    </React.Fragment>
  );
}

export default ProductList;

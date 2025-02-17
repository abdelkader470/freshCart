import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductItem from "../Shared/ProductItem/ProductItem";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="main-layout mb-8">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import styles from "./RelatedProduct.module.css";
import axios from "axios";
import ProductItem from "../../../Shared/ProductItem/ProductItem";
const RelatedProduct = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  let { categoryId } = props;
  function getProducts() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
        let res = data.data.filter(
          (product) => product.category._id === categoryId
        );
        setRelatedProducts(res);
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
      {relatedProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default RelatedProduct;

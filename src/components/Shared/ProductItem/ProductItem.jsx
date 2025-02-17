import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const ProductItem = ({ product }) => {
  let { addToCart } = useContext(CartContext);

  async function addProductToCart(productId) {
    let response = await addToCart(productId);
    console.log(response);
  }

  let { imageCover, title, category, price, ratingsAverage, id } = product;
  return (
    <>
      <div className=" md:1/2 lg:w-1/6 px-3 mb-3">
        <div className="product">
          <Link to={`/productDetails/${id}/${category._id}`}>
            <img src={imageCover} className="mb-2" alt="" />
            <span className="text-main">{category.name}</span>
            <h2 className="mb-4 font-bold">
              {title.split(" ").splice(0, 2).join(" ")}
            </h2>
            <div className="flex justify-between items-center mb-4">
              <p>{price} EGP</p>
              <p>
                <i className="fa fa-star rating-color"></i>
                {ratingsAverage}
              </p>
            </div>
          </Link>
          <button
            onClick={() => addProductToCart(product._id)}
            className="btn bg-main p-2 w-full text-center text-white rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

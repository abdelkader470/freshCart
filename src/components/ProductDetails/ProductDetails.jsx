import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./components/RelatedProduct/RelatedProduct";
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);

  let { id, categoryId } = useParams();

  function getProductDetails() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProductDetails();
  }, [id]);

  return (
    <>
      <div className="main-layout  items-center p-16">
        <div className="w-4/12">
          <img src={productDetails?.imageCover} alt="" />
        </div>
        <div className="w-8/12">
          <h1>{productDetails?.title}</h1>
          <p>{productDetails?.description}</p>
          <span>{productDetails?.category.name}</span>
          <div className="flex justify-between items-center mb-4">
            <p>{productDetails?.price} EGP</p>
            <p>
              <i className="fa fa-star rating-color"></i>
              {productDetails?.ratingsAverage}
            </p>
          </div>
          <button className="btn bg-main p-2 w-full text-center text-white rounded-md ">
            Add to Cart
          </button>
        </div>
      </div>
      <h2 className="text-4xl">Related Products</h2>
      <RelatedProduct categoryId={categoryId} />
    </>
  );
};

export default ProductDetails;

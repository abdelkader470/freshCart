import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../../../Shared/ProductItem/ProductItem";

const RecentProducts = () => {
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

export default RecentProducts;

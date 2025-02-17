import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const [count, setCount] = useState(0);
  return (
    <footer className="bg-[#f1f3f2] p-6 ">
      <div className="container">
        <h2 className="text-3xl"> Get The Fresh Cart</h2>
        <p className="mb-4">
          {" "}
          We Will send you a link, open it on your phone to download the
        </p>
        <div className="subscribe flex mb-6">
          <input type="text" className="grow me-4 rounded-md " />
          <button className="bg-main p-3 rounded-md text-white">
            Share app link
          </button>
        </div>
        <div className="payment flex justify-between border-y-2 py-4">
          <p>Payment Partners</p>
          <p>Get deliveries with FreshCart</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./shop.css";
import { PRODUCT } from "../../Products";
import SopProdcut from "./sopProdcut";
const Shop = () => {
  return (
    <div className="Shop">
      <div>
        <h1 className="text-center">Teklu Shopp</h1>
      </div>

      <div className="products">
        {PRODUCT.map((product, index) => (
          <SopProdcut className="d-inline-block" key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import { shopContext } from "../../context_api/api";

import React, { useContext } from "react";

const SopProdcut = (props) => {
  const { id, productName, Price, prodcuImage } = props.data;
  const { addtocart, removecart, cartItems } = useContext(shopContext);

  const carrtitemamount = cartItems[id];
  return (
    <div className="container d-block">
      <div className="product w-80 shadow-sm bg-gray-background rounded  ">
        <img src={prodcuImage} alt="" className="w-100 h-50 p-2" />
        <div className="discription">
          <p>
            <b className="text-dark ">Name:{productName}</b>{" "}
          </p>
          <p>Price:{Price}$</p>
        </div>
        <button
          className="rounded-pill bg-dark text-light p-1"
          onClick={() => addtocart(id)}
        >
          Add to Cart {carrtitemamount > 0 && <>({carrtitemamount})</>}
        </button>
      </div>
    </div>
  );
};

export default SopProdcut;

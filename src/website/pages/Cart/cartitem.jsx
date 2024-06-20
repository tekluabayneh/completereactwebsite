import React, { useContext, useState } from "react";
import { shopContext } from "../../context_api/api";

const CartItem = (props) => {
  const { id, productName, Price, prodcuImage, handelonchange } = props.data;
  const { cartItems, addtocart, removecart } = useContext(shopContext);

  return (
    <div className="w-50 text-center ml-12 d-flex flex-direction-row">
      <div className="cartitrm">
        <img className="w-80" src={prodcuImage} alt="img" />
        <div className="discription">
          <p>
            <b>Name:{productName}</b>
          </p>
        </div>
        <p>Price:{Price}$</p>
        <div className="counthandler">
          <button
            className="btn btn-primary mx-1"
            onClick={() => removecart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            className="w-25"
            onChange={(e) => handelonchange(Number(e.target.value), id)}
          />
          <button
            className="btn btn-primary mx-1"
            onClick={() => addtocart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

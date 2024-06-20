import React, { useContext } from "react";
import { PRODUCT } from "../../Products";
import { shopContext } from "../../context_api/api";
import CartItem from "./cartitem";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(shopContext);
  const navigate = useNavigate();
  const Totalamount = getTotalAmount();
  return (
    <div className="cart">
      <div>
        <h1 className="text-center">your cart Items</h1>
      </div>
      <div className="catritems">
        {PRODUCT.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {Totalamount > 0 ? (
        <div className="checkout text-center">
          <p>SubTotal: ${Totalamount}</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="btn btn-primary mx-2"> checkout</button>
        </div>
      ) : (
        <h1 className="text-center">Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;

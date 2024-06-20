import React, { createContext, useState } from "react";
import { PRODUCT } from "../Products";

const ge6tdefoultcart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const shopContext = createContext(null);
export const Shopcontextproviderr = (props) => {
  const [cartItems, setcaritem] = useState(ge6tdefoultcart());
  const getTotalAmount = () => {
    let TotalAmount = 0;
    for(let item in cartItems){
      if (cartItems[item] > 0) {
        let Iteminfo = PRODUCT.find((product) => product.id === Number(item));
        TotalAmount += cartItems[item] * Iteminfo.Price;
      }
    }
    return TotalAmount;




  };

  const addtocart = (itemid) => {
    setcaritem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };
  const removecart = (itemid) => {
    setcaritem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const handelonchange = (newAmount, itemid) => {
    setcaritem((prev) => ({ ...prev, [itemid]: newAmount }));
  };

  const contextvalue = {
    cartItems,
    addtocart,
    removecart,
    handelonchange,
    getTotalAmount,
  };

  return (
    <shopContext.Provider value={contextvalue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default Shopcontextproviderr;

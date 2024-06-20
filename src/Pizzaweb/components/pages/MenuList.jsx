import React from "react";
import "../pages/pages.css";
import "../menu.css";
const ProMenuList = ({ name, image, price }) => {
  return (
    <div className="menuItem">
      <img
        src={image}
        alt={name}
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: "70%",
          borderRadius: "0.25rem",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <h3 className="productName">Name:{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProMenuList;

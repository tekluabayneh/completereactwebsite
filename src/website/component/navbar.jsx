import React, { useEffect } from "react";
import "../webstyle.css";
import { Link, useFetcher } from "react-router-dom";
import { House, Bell, User, ShoppingCart } from "phosphor-react";

const Navbarr = () => {
  return (
    <div className="Navbar p-3 px-2">
      <div className="Links">
        <Link className="p-3 text-light text-decoration-none " to="/">
          Shop
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} weight="fill" color="#fff" />
        </Link>
      </div>
    </div>
  );
};

export default Navbarr;

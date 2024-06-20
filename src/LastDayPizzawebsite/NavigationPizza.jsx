import React from "react";
import Logo from "./Pizza_asset/FOODIE.svg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import BannerBackgroung from "./Pizza_asset/Banner_Background.png";
const NavigationPizza = () => {
  return (
    <div className="Nvigation_Link_continaer">
      <img className="Logo_img" src={Logo} alt="" />
      <div className="Link_continer">
        {/* <Link className="Link_items" to="/">
          home
        </Link> */}
        <a className="Link_items" href="#home">
          home
        </a>
        {/* <Link className="Link_items" to="/About">
          About
        </Link> */}
        <a className="Link_items" href="#About">
          About
        </a>
        {/* <Link className="Link_items" to="/work">
          work
        </Link> */}
        <a className="Link_items" href="#Work">
          Work
        </a>
        {/* <Link className="Link_items" to="/Testimonial">
          Testimonial
        </Link> */}
        <a className="Link_items" href="#Testimonial">
          Testimonial
        </a>
        <ShoppingCart size={29} weight="bold" color="black" />
        <button className="button">Bookings Now</button>
      </div>
      <img className="Banner_right_background" src={BannerBackgroung} alt="" />
    </div>
  );
};

export default NavigationPizza;
//  <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="">Home</a>
//         <a href="">About</a>
//         <a href="">Testimonials</a>
//         <a href="">Contact</a>
//         <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a>
//         <button className="primary-button">Bookings Now</button>
//       </div>

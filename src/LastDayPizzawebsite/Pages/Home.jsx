import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Pizza_asset/Home_Banner.png";
// import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";
import { ArrowRight } from "phosphor-react";
import "./pages.css";
const HomePiza = () => {
  return (
    <div className="Home_Section_container" id="home">
      <div className="HomeTitle_Section">
        <h2 className="Home_Title">
          {" "}
          your favorite food deliverd hot & fresh{" "}
        </h2>
        <p className="Home_paragraph">
          helthy swisher chefs do all pero perp work , like peeding, chopping &
          marinating, so you can cook a fresh food
        </p>
        <button className="Order_Now">
          order Now <ArrowRight size={29} weight="bold" color="#fff" />
        </button>
      </div>
      <div className="HomeImg_Section">
        <img className="img_Food" src={BannerImage} alt="food_img" />
      </div>
    </div>
  );
};

export default HomePiza;

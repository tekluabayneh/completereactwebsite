import React from "react";
import { Play } from "phosphor-react";
import Banner from "../Pizza_asset/About_Banners.png";
import Food from "../Pizza_asset/Aboutfood.png";
import "./pages.css";
const AboutPiza = () => {
  return (
    <>
      <img className="About_Banner" src={Banner} alt="" />
      <div className="About_Section " id="About">
        <div className="AboutleftSide">
          {" "}
          <img className="About_Food-img" src={Food} alt="" />
        </div>

        <div className="About_rightSide">
          <h2 className="firstTitle">About</h2>
          <h2 className="SecondTitle">
            food is an important part of a balanced diet
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            tempore recusandae corrupti officia est optio in nisi atque quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, iusto at! Magni odio maxime corrupti.
          </p>
          <div className="Button_play_learnmore">
            <button className="Learn_more">Learn More</button>
            <p className="flex_icon">
              {" "}
              <Play
                className="play-icon"
                size={32}
                weight="bold"
                color="black"
              />
              watch video
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPiza;

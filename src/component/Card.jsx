import React from "react";
import "./Card.css";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const Card = ({ imgsr, Title, Description, btntex, link }) => {
  return (
    <>
      <div className="card_container_not">
        {imgsr && <img src={imgsr} alt="card_img" className="card_img_not" />}
        <h1 className="card_Title">{Title}</h1>
        <p className="card_description_not">{Description}</p>
        <a className="card_btn_not" href={link}>
          {btntex}
        </a>
      </div>
    </>
  );
};

export default Card;

import React from "react";

import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";
import "./pages.css";
const FooterPiza = () => {
  return (
    <div id="Footer">
      <div>
        <h1>Have Quation in Mind ?</h1>
        <h2>Let us Help You</h2>
      </div>

      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>

      <div className="FooterLink_container">
        <div className="logo_con">
          <h1>FOODIE</h1>
          <p>
            {" "}
            <FacebookLogo size={32} weight="bold" color="#3b5998" />
            <TwitterLogo size={32} weight="bold" color="#1DA1F2" />
            <InstagramLogo size={32} weight="bold" color="#E4405F" />
          </p>
        </div>
        <div className="Link_con">
          <p>quality</p>
          <p>help</p>
          <p>share</p>
          <p>carrers</p>
          <p>work</p>
        </div>
        <div className="Number_con">
          <p>+2204-343-5455-45</p>
          <p>Abebe@gamil.com</p>
          <p>someone@gamil.com</p>
          <p>someone@gamil.com</p>
        </div>
        <div className="Terms_con">
          <p>Term & Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPiza;

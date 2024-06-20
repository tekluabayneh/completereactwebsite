import React from "react";
import { Star } from "phosphor-react";
import person from "../Pizza_asset/Ellips.png";
const TestimonialPiza = () => {
  return (
    <div id="Testimonial">
      <div className="testimonial_content">
        <h5 className="testi_Title  testi_Title_small">Testimonial</h5>
        <h1 className="testi_Title testi_Title_big">What They Are Saying</h1>
        <p className="testi_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse ut
          ipsum exercitationem officiis odit a, officia quaerat atque
          accusantium.
        </p>
      </div>

      <div className="person_testimonial">
        <img src={person} alt="" />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit doloribus inventore odit dolorem aliquid numquam fuga
          deleniti exercitationem modi?
        </p>
        <div className="px-3">
          <Star size={32} weight="bold" />
          <Star size={32} weight="bold" />
          <Star size={32} weight="bold" />
          <Star size={32} weight="bold" />
          <Star size={32} weight="bold" />
        </div>
        <h1>Teklu Abayneh</h1>
      </div>
    </div>
  );
};

export default TestimonialPiza;

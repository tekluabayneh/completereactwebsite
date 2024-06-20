import React from "react";
import multiplePizzas from "../../Assets/multiplePizzas.jpeg";
import "../menu.css";
const About = () => {
  return (
    <div className="About">
      <div
        className="AboutTop"
        style={{
          backgroundImage: `url(${multiplePizzas})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="p-5 w-70 "></div>
      </div>
      <div className="AboutButtom w-80 text-center">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          provident facere laboriosam aperiam sint illo qui tempore sunt vel et
          molestiae, odio fugit facilis temporibus aliquam cumque iusto.
          Provident sed quod quidem, odit itaque minus consectetur nesciunt
          atque ipsa, debitis tempore ab veritatis, rerum quos commodi! Soluta
          quae minima dicta autem eveniet esse placeat ex facere nostrum
          necessitatibus? Sint, soluta.
        </p>
      </div>
    </div>
  );
};

export default About;

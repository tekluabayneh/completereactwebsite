import { Link } from "react-router-dom";
import Assets from "../Assets/pizzaLogo.png";
import "../components/navbarpizza.css";
import { List } from "phosphor-react";
import { useState } from "react";
const Navbarpiazz = () => {
  const [openlink, setopenlink] = useState(true);

  const toggleMenu = () => {
    setopenlink(!openlink);
  };
  return (
    <div className="Navbarpizza position-fixed t-0">
      <div className="leftside">
        <img src={Assets} alt="" />
      </div>
      <div className="rightside">
        <ul>
          <li className="items_li" id={openlink ? "close" : "open"}>
            {/* <a href="#">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li className="items_li" id={openlink ? "close" : "open"}>
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="items_li" id={openlink ? "close" : "open"}>
            <Link to="/About">About</Link>
          </li>
          <li className="items_li" id={openlink ? "close" : "open"}>
            <Link to="/Contuct">Contuct</Link>
          </li>
          <li>
            <List
              onClick={() => setopenlink(toggleMenu)}
              className="Hamburger"
              size={32}
              color="#fff"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarpiazz;

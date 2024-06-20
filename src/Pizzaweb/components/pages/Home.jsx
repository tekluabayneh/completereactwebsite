import React from "react";
import { Link } from "react-router-dom";
import Asset from "../../Assets/pizza.jpeg";
import "../pages/pages.css";
const Home = () => {
  return (
    <div className="Home pt-5">
      <div
        className="headerContainer text-center h-100 w-100"
        style={{
          backgroundImage: `url(${Asset})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-5 text-light home-container">
          <h1 className="pt-5 gr ">Welcome!</h1>
          <h4>Explore the world Testy Pizza!</h4>
          <p className="w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            itaque nobis harum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nobis, sit.
          </p>

          <Link to="/Menu">
            <button className="btn btn-primary">Order Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

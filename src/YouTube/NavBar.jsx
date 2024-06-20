import React from "react";
import "./style.css";
const NavBar = ({ setcategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark p-2">NewsMag</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("business")}>
                business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setcategory("entertainment")}
              >
                entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("general")}>
                general
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("science")}>
                science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("sports")}>
                sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setcategory("technology")}
              >
                technology
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
// style="width: 100%; position: fixed; z-index: 44;"

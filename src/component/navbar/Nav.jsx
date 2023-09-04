import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            MYTINERARY
          </Link>
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
          <div
            className="collapse navbar-collapse  justify-content-end  mt-2"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/city">
                  CITY
                </Link>
              </li>
              <div className="d-flex justify-content-center gap-3 button-login">
              <button  className=" border border-0 rounded  p-1 pe-2">
              <i className='fa-solid fa-user p-2'></i>
                Login
              </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

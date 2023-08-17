import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger bg-gradient">
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
            className="collapse navbar-collapse d-flex justify-content-end"
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
              <button style={{ backgroundColor: 'rgb(138, 30, 84)'}} className=" border border-0 rounded text-white p-1">
              <i className='bx bx-user' style={{color:'#c420d2'}}></i>
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

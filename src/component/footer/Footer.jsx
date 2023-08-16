import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-danger bg-gradient text-white">
          <div className="col-md-2 ms-5">
            <h5 className="px-auto"> Networks</h5>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook px-3"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
          </div>
          <div className="col-md-2 menu_footer">
            <h5>Navigation</h5>
            <Link to="/">
              <i className="fa-solid fa-house-chimney-window px-2"></i>
            </Link>
            <Link to="/city">
              <i className="fa-solid fa-tree-city px-2"></i>
            </Link>
          </div>
          <div className="col-md-2">
            <h5>Information</h5>
            <i>
              <i className="fa-solid fa-circle-info"></i>
            </i>
          </div>
    </footer>
  );
};

export default Footer;

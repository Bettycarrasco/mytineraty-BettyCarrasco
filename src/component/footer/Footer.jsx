import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>social networks</h4>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
          </div>
          <div className="col-md-4">
            <h4>Navigation menu</h4>
            <Link to="/">
              <i className="fa-solid fa-house-chimney-window"></i>
            </Link>
            <Link to="/city">
              <i className="fa-solid fa-tree-city"></i>
            </Link>
          </div>
          <div className="col-md-4">
            <h4>Additional Information</h4>
            <i>
              <i className="fa-solid fa-circle-info"></i>
            </i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

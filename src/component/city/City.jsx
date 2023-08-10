import React from "react";
import img from "../../json/data.json";

const imag = img.dato[0].url;

const City = () => {
  return (
    <div className="container">
      <img className="contruction" src={imag} alt="" />
    </div>
  );
};

export default City;

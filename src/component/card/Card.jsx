import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="car">
      <h2 className="sud_title2">
        "Find your perfect trip, designed by insiders who know and love their
        cities!"
      </h2>
      <h2 className="sud_title">Find the perfect destination</h2>
      <p className="card_paragraph">
        Our app will help you find the perfect path for your next trip. with an
        easy-to-use interface and a host of itinerary option, planning your next
        trip has never been easier.
      </p>
      <Link to={"/city"} > 
      <button className="view">View More</button>
      </Link>
    </div>
  );
};

export default Card;

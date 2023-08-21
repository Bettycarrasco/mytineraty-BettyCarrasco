import React from "react";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <section className="car p-xxl-5">
        <Card />
        <div className="d-flex flex-column justify-content-center align-content-center bg-transparent border border-danger-subtle p-3">
          <h5 className="d-flex justify-content-center p-lg-5 text-danger">
            Popular Mytineraries
          </h5>
          <Carousel  />
        </div>
      </section>
    </div>
  );
};

export default Home;

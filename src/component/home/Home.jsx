import React from "react";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <section className="car p-xxl-5">
        <Card />
        <div className=" conter-car flex-column align-content-center bg-transparent p-3">
          <h5 className="sud_title3 d-flex justify-content-center p-lg-5">
            Popular Mytineraries
          </h5>
          <div className="d-flex justify-content-center">
          <Carousel  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

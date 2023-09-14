import React from "react";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <>
      <div data-aos="fade-down"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000" className="home">
      {/* <marquee direction="left">
        <img src="/public/avion.png" height={"85"} width={"200"} alt="azul" />
      </marquee>
      <marquee direction="right">
        <img src="/public/avion_2.png" height={"65"} width={"200"} alt="rojo" />
      </marquee> */}
        <section className="car p-xxl-5">
          <Card />
          <div className=" conter-car flex-column align-content-center bg-transparent p-3">
            <h5 className="sud_title3 d-flex justify-content-center p-lg-5">
              Popular Mytineraries
            </h5>
            <div className="d-flex justify-content-center">
              <Carousel />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

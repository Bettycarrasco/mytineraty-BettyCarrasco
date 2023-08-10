import React from "react";
import Json from "../../json/Json.json";

const image = Json.cities;

function getArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Carousel = () => {

  const carouselItems = getArray(image, 4);
  
  return (
    <div className="carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-1">
          {carouselItems.map((_, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              key={index}
            ></button>
          ))}
        </div>
        <div className="carousel-inner d-flex">
          {carouselItems.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="2500"
              key={index}
            >
              <div className="row">
                {group.map((cityItem) => (
                  <div className="col-md-3" key={cityItem.id}>
                    <img
                      src={cityItem.url}
                      className="image d-block"
                      alt={cityItem.firstName}
                    />
                    <h6 className="firs_Name text-white">{cityItem.firstName}</h6>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

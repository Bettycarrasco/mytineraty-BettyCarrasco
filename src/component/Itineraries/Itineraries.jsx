import React from "react";

const Itineraries = ({ data }) => {
  return (
    <div
      className="d-flex mb-3 card p-2 flex-wrap  justify-content-center bg-danger-subtle"
      style={{ color: "rgb(138, 30, 84)" }}
    >
      <h1>{data.name}</h1>
      <div className="d-flex gap-2 card p-2 bg-danger-subtle">
        <img
          src={data.photo}
          className="card-img-top rounded border border-danger border-4"
          style={{ height: "25rem"}}
          alt={data.name}
        />
        <p>
          <img
            src={data.photoUser}
            className="card-img-top rounded border border-danger border-4"
            style={{ height: "8rem", width: "8rem" }}
            alt={data.name}
          />
        </p>
        <h4>userName: {data.userName}</h4>
        <h5>price: {"💸".repeat(data.price)}</h5>
        <h5>duration: ⌚{data.duration} min</h5>
        <h5>likes: ❤️{data.likes}</h5>
        <h5>tematicHashtags: {data.likes}</h5>
      </div>
    </div>
  );
};

export default Itineraries;

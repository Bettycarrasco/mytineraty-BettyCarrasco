import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Importa useParams para obtener los parámetros de la URL

const API = "http://localhost:8000/cities";

function Tineraty() {
  const [dataCity, setDataCity] = useState({});
  const { _id } = useParams(); // Obtiene el parámetro "index" de la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/${_id}`);
        const data = await response.json();
        setDataCity(data); // Usa el índice para obtener los datos de la ciudad seleccionada
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchData();
  }, [_id]);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        <div className="card p-4 bg-dark-subtle" style={{ width: "50rem" }}>
          <img
            src={dataCity.url}
            className="card-img-top rounded border border-primary border-4"
            alt={`${dataCity.city}, ${dataCity.country}`}
          />
          <div className="card-body justify-content-center d-block text-center">
            <h5 className="card-title">{dataCity.city}.</h5>
            <h3>{dataCity.country}.</h3>
            <p className="card-text text-start">{dataCity.description}</p>
          </div>
        </div>
      </div>
      <div className="button_prev d-flex justify-content-center align-content-center text-center mt-4">
        <Link to={"/city"} style={{ textDecoration: "none" }}>
          <button className="p-2 fs-3 fw-bold text-decoration-none d-flex align-content-center justify-content-center border-0 rounded gap-2 bg-primary text-white">
            <div>
              <i className=" mt-2 fs-2 d-flex justify-content-center align-content-center fw-bold fa-solid fa-chevron-left"></i>
            </div>
            <div>prev</div>
          </button>
        </Link>
      </div>
      <section className="d-flex justify-content-center mt-xxl-5*2 mb-xxl-5">
        <h5 className="fs-1 fw-bold mt-5 text-warning bg-black rounded p-3">
          "Under construction"{" "}
        </h5>
      </section>
    </div>
  );
}

export default Tineraty;

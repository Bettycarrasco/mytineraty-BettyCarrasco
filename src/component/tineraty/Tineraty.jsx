import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Itineraries from "../itineraries/Itineraries";
import axios from "axios";

const API = "http://localhost:7000/cities";

function Tineraty() {
  const [dataCity, setDataCity] = useState({});
  const { _id } = useParams();
  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/${_id}`);
        const data = await response.json();
        setDataCity(data);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchData();
  }, [_id]);

  useEffect(()=> {
    axios("http://localhost:7000/itinerary/city/"+_id)
    .then(res=>setItineraries(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        <div className="card p-4 bg-danger-subtle" style={{ width: "60rem" }}>
          <img
            src={dataCity.url}
            className="card-img-top rounded border border-danger border-4"
            style={{ height: "40rem" }}
            alt={`${dataCity.city}, ${dataCity.country}`}
          />
          <div className="card-body justify-content-center d-block text-center">
            <h5 className="card-title">{dataCity.city}.</h5>
            <h3>{dataCity.country}.</h3>
            <p className="text-start">{dataCity.description}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center text-center mt-4">
        <Link to="/city" style={{ textDecoration: "none" }}>
          <button className="p-2 fs-3 fw-bold text-decoration-none d-flex align-content-center justify-content-center border-0 rounded gap-2 bg-danger text-white">
            <div>
              <i className=" mt-2 fs-2 d-flex justify-content-center align-content-center fw-bold fa-solid fa-chevron-left"></i>
            </div>
            <div>Go back</div>
          </button>
        </Link>
      </div>
      <section className="d-flex justify-content-center mt-xxl-5*2 mb-xxl-5">
        {/* <h5 className="fs-1 fw-bold mt-5 text-white bg-danger rounded p-3">
          "UNDER CONSTRUCTION"
        </h5> */}
        <div className="text-center" style={{color:'rgb(138, 30, 84)'}}>
        <h1 style={{color:'rgb(138, 30, 84)'}} className="mt-4 p-1 bg-danger-subtle" >ITINERARIES</h1>
        {
          itineraries == "" ?
            <h2 className="p-1 bg-danger-subtle">NOT FOUND FOR THIS CITY YET </h2>
            :
            itineraries.map((e, i)=>{
            return   <Itineraries key={i} data={e} />
            })
        }
        </div>
      </section>
    </div> 
  );
}

export default Tineraty;

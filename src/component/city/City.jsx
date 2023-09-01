import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { readAllCities } from "../../redux/Action/CitiesAction.js";

const API = "http://localhost:7000/cities";

function City() {
  const dataCity = useSelector(store => store.readAllCitiesReducer.cities)
  const dispatch = useDispatch()
  //const [dataCity, setDataCity] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterData, setFilterData] = useState([]);
  
  useEffect(()=>{
    dispatch(readAllCities());
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(API);
  //       const data = await response.json();
  //       setDataCity(data);
  //     } catch (error) {
  //       console.error("Hubo un error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSearch = () => {
    const searchTerm = searchInput.trim().toLowerCase();

    if (searchTerm === '') {
      setFilterData([]);
      return;
    }

    const filterCities = dataCity.filter(item => {
      const cityLower = item.city.toLowerCase();
      return cityLower.indexOf(searchTerm) === 0;
    });

    setFilterData(filterCities);
    if (filterCities.length === 0 && searchTerm !== '') {
      Swal.fire({
        icon: "error",
        title: "Sorry Not Found",
        text: "Sorry no result found",
        background: "yellow",
        color: "white",
        timer: 3000,
        showConfirmButton: false,
      })
      setSearchInput('')
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch();

    if (e.target.value === '') {
      setFilterData([]); // Restaura todas las tarjetas si se borra el campo
    }
  };

  const displayData = filterData.length > 0 ? filterData : dataCity;

  return (
    <div>
      <section className="d-flex justify-content-center mt-5">
        <div className="search d-flex justify-content-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search city or country..."
            //value={searchInput}
            onChange={handleInputChange}
          />
        </div>
      </section>
      <section className="d-flex gap-5 flex-wrap p-5 justify-content-center">
        {displayData.map((item) => (
          <div
            key={item._id}
            className="card p-4 bg-danger-subtle custom-card"
            style={{ width: "25rem" }}
          >
            <Link to={`/tineraty/${item._id}`}>
              <img
                src={item.url}
                className="card-img-top rounded border border-danger border-3"
                alt={`${item.city}, ${item.country}`}
              />
            </Link>
            <div className="card-body d-block text-center">
              <h5 className="card-title">{item.city}.</h5>{" "}
              <h3>{item.country}.</h3>
              <p className="card-text text-start">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default City;

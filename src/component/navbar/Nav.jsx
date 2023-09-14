import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/Action/UserAction.js";
import Swal from "sweetalert2";

const Nav = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
  const user = useSelector(state => state.userReducer.user)
  
  const logout = () =>  {
  dispatch(logoutAction())
  Swal.fire({
    icon: "success",
    title: "Register in!",
  });
  navigate('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            MYTINERARY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end  mt-2"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/city">
                  CITY
                </Link>
              </li>
              <div className=" d-flex justify-content-center gap-3 button-login">
              {user && Object.keys(user).length !== 0 ?
              <button onClick={logout}  className="border border-0 rounded  p-1 pe-2 cursor">
              <img src={user.Photo} alt={user.name} className="card-img-top rounded border border-danger border-4"
              style={{ height: "2rem", width: "2rem" }} />
                Logout
              </button>
              :
              <Link to="/login"  className="border border-0 rounded  p-1 pe-2">
              <i className='fa-solid fa-user p-2'></i>
                Login
              </Link>
              }
              </div>
              <div className="">
              <Link to="/register"  className="border border-0 rounded  p-1 pe-2">
              <i className='fa-solid fa-user p-2'></i>
                sing up
              </Link>
              </div>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

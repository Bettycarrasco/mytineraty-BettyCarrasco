import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Action/UserAction.js";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const [isRegistered, setIsRegistered] = useState(false);



  const handleChangeData = (e) => {
    const { value,name, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
    
  };
  
  const handleFormSumit = async (e) => {
    e.preventDefault();

    const requestData = {
        email: data.email,
        password: data.password
      };
      
      try {
        const response = await axios.post("http://localhost:7000/users/login",
        {...requestData} );
        dispatch(login(response.data))
        navigate('/')
        Swal.fire({
          icon: "success",
          title: "Login in!",
        });
        
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: `Something went wrong! ${error.response.data.message}`,
        icon: "error",
      })
      
    }
  };
  
  return (
    <form onSubmit={handleFormSumit}
      className="form d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="">
        <GoogleOAuthProvider clientId="614410127871-8h2cdmlibjb1mhg14r9c871tfdpfqd2k.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(CredentialResponse) => {
              //console.log("CredentialResponse");
              const infoUser = jwtDecode(CredentialResponse.credential);
              //console.log(infoUser);
              setData({
                email: infoUser.email,
                password: "aA_123",
                terms: true,
              });
              
            }}
            onError={() => {
              console.log("Login Failed");
              Swal.fire({
                title: "Something went wrong!",
                icon: "error",
              });
            }}
          />
        </GoogleOAuthProvider>
        {/* <div className="mb-2 p-5">
        <GoogleLogin
          clientId="TU_CLIENT_ID_DE_GOOGLE" // Reemplaza esto con tu propio Client ID de Google
          buttonText="Iniciar sesión con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div> */}
        {/* <div className="">
          <label htmlFor="exampleInputName" className="form-label" style={{ color: 'rgb(138, 30, 84)' }}>Name</label>
          <input name='name' onChange={handleChangeData} value={data.name} type="text" className="form1 form-control" id="exampleInputName" aria-describedby="namelHelp" />
          <div id="namelHelp" className="form-text">Surname and first name</div>
        </div> */}
        <div className="">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-bold fs-5"
            style={{ color: "rgb(138, 30, 84)" }}
          >
            Email address
          </label>
          <input
            name="email"
            onChange={handleChangeData}
            value={data.email}
            type="email"
            className="form1 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-bold fs-5"
            style={{ color: "rgb(138, 30, 84)" }}
          >
            Password
          </label>
          <input
            name="password"
            onChange={handleChangeData}
            value={data.password}
            type="password"
            className="form1 form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>
      <div className="mb-2 p-5 form-check">
        <input
          name="terms"
          onChange={handleChangeData}
          checked={data.terms}
          type="checkbox"
          className="form1 form-check-input"
          id="exampleCheck1"
        />
        <label
          className="form-check-label fw-bold fs-5"
          htmlFor="exampleCheck1"
          style={{ color: "rgb(138, 30, 84)" }}
        >
          Check me out
        </label>
      </div>
      <div>
      <button
        type="submit"
        className="form1 mb-2 p-2 btn btn-primary d-flex justify-content-center"
        style={{ backgroundColor: "rgb(138, 30, 84)", width: "100px", color: "white" }}
      >
        Submit
      </button>
              <Link to="/register" style={{textDecoration:"none"}}>
              <button type="button" className="form1 mb-2 p-2 btn btn-primary d-flex justify-content-center"
        style={{ backgroundColor: "rgb(138, 30, 84)", width: "100px",  color: "white" }}>
          sing up</button>
              </Link>
              </div>
    </form>
              );
};

export default Login;

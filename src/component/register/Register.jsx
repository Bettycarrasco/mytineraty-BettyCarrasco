import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Photo: "",
    terms: false,
  });

  const handleChangeData = (e) => {
    const { value, name, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const googleRegister = async (data) => {
    try {
      await axios.post("http://localhost:7000/users", data);
      console.log("dato de registro", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...data };
    if (data.terms) {
      const requestData = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        password: data.password,
        Photo: data.Photo,
      };

      try {
        const response = await axios.post("http://localhost:7000/users", {
          ...requestData,
        });
        console.log("Datos de registro:", response.data);
        Swal.fire({
          icon: "success",
          title: "Register in!",
          text: `Welcome, ${requestData.name}! You have successfully registered.`,
        });
        // Aquí puedes manejar la respuesta del servidor o redirigir al usuario, por ejemplo, a la página de inicio de sesión.
      } catch (error) {
        console.error("Error al registrar:", error);
        Swal.fire({
          icon: "error",
          title: "Fail Register!",
          text: `The email: ${requestData.email.toUpperCase()} is already Registered!`,
        });
        // Aquí puedes manejar errores, mostrar mensajes de error al usuario.
        setRegistrationStatus("error");
      }
    } else {
      setRegistrationStatus("terms-error");
      console.log("Debe aceptar los términos y condiciones.");
    }
  };

  const renderAlert = () => {
    if (registrationStatus === "success") {
      return (
        <div className="alert alert-success">Usuario registrado con éxito.</div>
      );
    } else if (registrationStatus === "error") {
      return (
        <div className="alert alert-danger">Error al registrar el usuario.</div>
      );
    } else if (registrationStatus === "terms-error") {
      return (
        <div className="alert alert-warning">
          Debe aceptar los términos y condiciones para registrarse.
        </div>
      );
    }
    return null;
  };

  return (
    <form
      className="form d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
      onSubmit={handleSubmit}
    >
      <div className="">
        <GoogleOAuthProvider clientId="614410127871-8h2cdmlibjb1mhg14r9c871tfdpfqd2k.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(CredentialResponse) => {
              const infoUser = jwtDecode(CredentialResponse.credential);
              setData({
                firstName: infoUser.given_name,
                lastName: infoUser.family_name,
                email: infoUser.email,
                password: "aA_123",
                Photo: infoUser.picture,
                terms: true,
              });
              // Swal.fire({
              //   icon: "success",
              //   title: "Register in!",
              // });
              googleRegister({
                firstName: infoUser.given_name,
                lastName: infoUser.family_name || " ",
                email: infoUser.email,
                password: "aA_123",
                Photo: infoUser.picture || " ",
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
        <div className="">
          <label
            htmlFor="exampleInputFirstName"
            className="form-label fw-bold fs-5"
            style={{ color: "rgb(138, 30, 84)" }}
          >
            First Name
          </label>
          <input
            name="firstName"
            onChange={handleChangeData}
            value={data.firstName}
            type="text"
            className="form1 form-control"
            id="exampleInputFirstName"
            aria-describedby="firstNamelHelp"
          />
         
        </div>
        <div className="">
          <label
            htmlFor="exampleInputLastName"
            className="form-label fw-bold fs-5"
            style={{ color: "rgb(138, 30, 84)" }}
          >
            Last Name
          </label>
          <input
            name="lastName"
            onChange={handleChangeData}
            value={data.lastName}
            type="text"
            className="form1 form-control"
            id="exampleInputLastName"
            aria-describedby="lastNamelHelp"
          />
        </div>
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
        <div className="">
          <label
            htmlFor="exampleInputPhoto"
            className="form-label fw-bold fs-5"
            style={{ color: "rgb(138, 30, 84)" }}
          >
            Photo
          </label>
          <input
            name="Photo"
            onChange={handleChangeData}
            value={data.Photo}
            type="text"
            className="form1 form-control"
            id="exampleInputPhoto"
            aria-describedby="photoHelp"
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
      <button
        type="submit"
        className="form1 mb-2 p-2 btn btn-primary d-flex justify-content-center"
        style={{
          backgroundColor: "rgb(138, 30, 84)",
          width: "100px",
          color: "white",
        }}
      >
        Submit
      </button>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button
          type="button"
          className="form1 mb-2 p-2 btn btn-primary d-flex justify-content-center"
          style={{
            backgroundColor: "rgb(138, 30, 84)",
            width: "100px",
            color: "white",
          }}
        >
          Sign in
        </button>
      </Link>
    </form>
  );
};

export default Register;

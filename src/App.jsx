import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import City from "./component/city/City.jsx";
import Home from "./component/home/Home.jsx";
import Nav from "./component/navbar/Nav.jsx";
import Footer from "./component/footer/Footer.jsx";
import Tineraty from "./component/tineraty/Tineraty.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
import Login from "./component/login/Login.jsx";
import Register from "./component/register/Register.jsx";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tineraty/:_id" element={<Tineraty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;

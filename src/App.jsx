import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import City from "./component/city/City.jsx";
import Home from "./component/home/Home.jsx";
import Nav from "./component/navbar/Nav.jsx";
import Footer from "./component/footer/Footer.jsx";
import Tineraty from "./component/tineraty/Tineraty.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/tineraty/:_id" element={<Tineraty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

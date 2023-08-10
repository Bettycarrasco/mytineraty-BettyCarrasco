import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import City from "./component/city/City";
import Home from "./component/home/Home";
import Nav from "./component/navbar/Nav";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

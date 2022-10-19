// css
import "../css/home.css";
import "../css/cards.css";
import "../css/navbar.css";
import "../css/detalle.css";
import "../css/reiniciosgenerales.css";
import "../css/cart.css";
import "../css/footer.css";
// React & React router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// Components
import Nav from "./content/Navbar";
import Home from "./content/Home";
import Footer from "./content/Footer";
// LI NAV
import Categoria from "./content/Categoria";
import Carrito from "./content/Carrito";
import Producto from "./content/Producto";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos/:id" element={<Producto />} />
          <Route path="/Categoria/:id" element={<Categoria />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route
            path="*"
            element={
              <div className="main">
                <h1>Error 404</h1>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

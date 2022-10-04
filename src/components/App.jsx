// css
import "../css/App.css";
import "../css/main.css"
import "../css/detalle.css"
import "../css/reiniciosgenerales.css"
// React & React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// Components
import Nav from "./content/Navbar";
import Home from "./content/Home";
import Footer from "./content/Footer"
// LI NAV
import Categoria from "./content/Categoria";

import Buzos from "./layouts/itemList"
import Carrito from "./content/Carrito";
import Producto from "./content/Producto";

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Buzos" element={<Buzos/>}/>
                <Route path="/Productos/:id" element={<Producto/>}/>
                <Route path="/Categoria/:id" element={<Categoria/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    );
}

export default App;

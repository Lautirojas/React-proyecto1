// css
import "../css/App.css";
// React & React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// Components
import Nav from "./content/Navbar";
import Home from "./content/Home";
import Footer from "./content/Footer"
// LI NAV
// import Itemlist from "./layouts/itemList"
import Remeras from "./content/Remeras"
import Jeans from "./content/Jeans"
import Carrito from "./content/Carrito";
import Accesorios from  "./content/Accesorios"
import Camisas from "./content/Camisas"
import Shorts from "./content/Shorts"
import Producto from "./content/Producto";

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Productos/:id" element={<Producto/>}/>
                <Route path="/Remeras" element={<Remeras/>}/>
                <Route path="/Jeans" element={<Jeans/>}/>
                <Route path="/Accesorios" element={<Accesorios/>}/>
                <Route path="/Camisas" element={<Camisas/>}/>
                <Route path="/Shorts" element={<Shorts/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    );
}

export default App;

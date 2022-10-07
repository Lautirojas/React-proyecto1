import React from 'react';
//CSS
import "../../css/navbar.css";
import "../../css/reiniciosgenerales.css";
// COMPONENTS
import logo from "../notfancylogo.png";
import Carrito from '../content/Carrito';
import { Link } from 'react-router-dom';

const Pages = () => {
    return (
        <>
            <div className='header-main'>
                <div className='logo'>
                    <Link to="/"><img src={logo} alt="Logo.icon" /> </Link>
                </div>
                <div className='ul-container'>
                    <ul className='d-flex justify-center'>
                        <li className='li-nav'><Link to="/Categoria/Buzos">BUZOS</Link></li>
                        <li className='li-nav'><Link to="/Categoria/Remeras">REMERAS</Link></li>
                        <li className='li-nav'><Link to="/Categoria/Pantalones">PANTALONES</Link></li>
                        <li className='li-nav'><Link to="/Categoria/Accesorios">ACCESORIOS</Link></li>
                        <li className='li-nav'><Link to="/Categoria/Camisas">CAMISAS</Link></li>
                        <li className='li-nav'><Link to="/Categoria/Shorts">SHORTS</Link></li>
                    </ul>
                </div>
                <Carrito/>
            </div>
        </>
    );
}

export default Pages;

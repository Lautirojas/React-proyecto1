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
                    <img src={logo} alt="Logo.icon" />
                </div>
                <div className='ul-container'>
                    <ul className='d-flex justify-center'>
                        <li className='li-nav'><Link to="/Productos">BUZOS</Link></li>
                        <li className='li-nav'><Link to="/Remeras">REMERAS</Link></li>
                        <li className='li-nav'><Link to="/Jeans">JEANS</Link></li>
                        <li className='li-nav'><Link to="/Accesorios">ACCESORIOS</Link></li>
                        <li className='li-nav'><Link to="/Camisas">CAMISAS</Link></li>
                        <li className='li-nav'><Link to="/Shorts">SHORTS</Link></li>
                    </ul>
                </div>
                <Carrito/>
            </div>
        </>
    );
}

export default Pages;

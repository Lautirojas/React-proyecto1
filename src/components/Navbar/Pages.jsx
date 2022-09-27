import React from 'react';
import "../../css/navbar.css";
import "../../css/reiniciosgenerales.css";
import logo from "../../multimedia/notfancylogo.png";
import Carrito from './Carrito';

const Pages = () => {
    return (
        <>
            <div className='header-main'>
                <div className='logo'>
                    <img src={logo} alt="Logo.icon" />
                </div>
                <div className='ul-container'>
                    <ul className='d-flex justify-center'>
                        <li className='li-nav'>BUZOS</li>
                        <li className='li-nav'>REMERAS</li>
                        <li className='li-nav'>JEANS</li>
                        <li className='li-nav'>ACCESORIOS</li>
                        <li className='li-nav'>CAMISAS</li>
                        <li className='li-nav'>SHORTS</li>
                    </ul>
                </div>
                <Carrito/>
            </div>
        </>
    );
}

export default Pages;

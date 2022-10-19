import {memo} from 'react';
//CSS
import "../../css/navbar.css";
import "../../css/reiniciosgenerales.css";
// COMPONENTS
import logo from "../notfancylogo.png";
import { Link } from 'react-router-dom';

const Pages = () => {
    return (
        <>
            <div className='header-main'>
                <div className='logo'>
                    <Link to="/"><img className='img-nav' src={logo} alt="Logo.icon" /> </Link>
                </div>
                <div className='ul-container'>
                <ul className='d-flex justify-center'>
                    <li className='li-nav'><Link className="hover-linav" to="/Categoria/Buzos">BUZOS</Link></li>
                    <li className='li-nav'><Link className='hover-linav'  to="/Categoria/Remeras">REMERAS</Link></li>
                    <li className='li-nav'><Link className='hover-linav'  to="/Categoria/Pantalones">PANTALONES</Link></li>
                    <li className='li-nav'><Link className='hover-linav'  to="/Categoria/Accesorios">ACCESORIOS</Link></li>
                    <li className='li-nav'><Link className='hover-linav'  to="/Categoria/Camisas">CAMISAS</Link></li>
                    <li className='li-nav'><Link className='hover-linav'  to="/Categoria/Shorts">SHORTS</Link></li>
                </ul>
                </div>
                <Link to="/Carrito">
                        <span className="material-symbols-outlined iconcarrito">
                            shopping_cart
                        </span>
                </Link>
            </div>
        </>
    );
}

export default memo(Pages);

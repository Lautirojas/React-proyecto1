import {memo} from 'react';
import { Link } from 'react-router-dom';
import "../../css/footer.css"
import logo from "../notfancylogowhite.png"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='img-footer'><img className='img-f' src={logo} alt="" /></div>
            <div className='ul-footer-c'>
                <div>
                    <ul className='d-flex justify-center'>
                        <li className='li-nav'><Link className="hover-linav-footer" to="/Categoria/Buzos">BUZOS</Link></li>
                        <li className='li-nav'><Link className='hover-linav-footer'  to="/Categoria/Remeras">REMERAS</Link></li>
                        <li className='li-nav'><Link className='hover-linav-footer'  to="/Categoria/Pantalones">PANTALONES</Link></li>
                        <li className='li-nav'><Link className='hover-linav-footer'  to="/Categoria/Accesorios">ACCESORIOS</Link></li>
                        <li className='li-nav'><Link className='hover-linav-footer'  to="/Categoria/Camisas">CAMISAS</Link></li>
                        <li className='li-nav'><Link className='hover-linav-footer'  to="/Categoria/Shorts">SHORTS</Link></li>
                    </ul>
                </div>
            </div>
            <div className='ul-footer-c'>
                <div className='container-icon'><a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook fa-2xl fa-icon"></i></a></div>
                <div className='container-icon'><a href="https://www.instagram.com/?theme=dark"><i className="fa-brands fa-instagram fa-2xl fa-icon"></i></a></div>
            </div>
        </div>
    );
}

export default memo(Footer);

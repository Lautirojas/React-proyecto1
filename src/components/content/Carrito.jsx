import React from 'react';
import { Link } from 'react-router-dom';


const Carrito = () => {
    return (
            <>
                <div className='iconcarrito-container'>
                    <Link to="/Carrito">
                        <span className="material-symbols-outlined iconcarrito">
                            shopping_cart
                        </span>
                    </Link>
                </div>
            </>
    );
}

export default Carrito;

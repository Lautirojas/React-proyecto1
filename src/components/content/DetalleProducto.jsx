import React from 'react';
import "../../css/detalle.css"

const DetalleProducto = ({producto}) => {
    return (
        <div className='containerdetalle'>
            <div className='productmetacontainer pb-40'>
                <div className='columnright pr-16 mt-16'>
                    <div className='p-sticky'>
                        <div className='meta'>
                            <div className='p-relative'>
                                <div className='meta-header'>
                                    <div>
                                        <span>Producto Nuevo</span>
                                    </div>
                                    <div className='meta-title'>
                                        <h1 className='title'>{producto.nombre}</h1>
                                    </div>
                                    <div className='review'>
                                        <span className="material-symbols-outlined icon">grade</span>
                                        <span className="material-symbols-outlined icon">grade</span>
                                        <span className="material-symbols-outlined icon">grade</span>
                                        <span className="material-symbols-outlined icon">grade</span>
                                        <span className="material-symbols-outlined icon">grade</span>
                                    </div>
                                    <div className="mt-16">
                                        <span className='realprice'>
                                            $5000
                                        </span>
                                        <div className='dicountprice'>
                                            <div>
                                                <span>${producto.precio}</span>
                                            </div>
                                            <div className='discont'>
                                                <span className='main-color'>34 % OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-16'>
                                        <div className='d-flex align-items'>
                                            <figure className='figure-meta'>
                                                <span className="material-symbols-outlined main-color">local_shipping</span>
                                            </figure>
                                            <div>
                                                <p className='signs'>
                                                    Envios a todo el pais
                                                </p>
                                                <div className='advices'>
                                                    <a href="">Ver más formas de entrega</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-16'>
                                        <div className='d-flex'>
                                            <figure className='figure-meta'>
                                            <span className="material-symbols-outlined main-color">keyboard_return</span>
                                            </figure>
                                            <div>
                                                <p className='signs'>
                                                    Devolución Gratis
                                                </p>
                                                <div>
                                                    <p className='advice-devolucion'>30 dias de garantia desde que lo recibís</p>
                                                </div>
                                                <div className='advices'>
                                                    <a href="">Conocer Más</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex stock-available'>
                                        <p>Stock disponible: {producto.stock}</p>
                                    </div>
                                    <div className="product__sumaresta">
                                        <form>
                                            <button className="product__buttons"><span className="material-symbols-outlined">add</span></button>
                                        </form>
                                        <input type="tel" autoComplete="off" disabled className="product__input" defaultValue="1" />
                                        <form>
                                            <button type="button" className="product__buttons"><span className="material-symbols-outlined">remove</span></button>
                                        </form>
                                    </div>
                                    <div className='d-flex d-column'>
                                        <form action="">
                                            <div className='d-flex d-column justify-center buy-buttons'>
                                                <button type='submit' className='buy-button'><span>Comprar ahora</span></button>
                                                <button type='submit' className='buy-button'><span>Agregar al Carrito</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='meta mt-16'>
                                <div className='pay-method'>
                                    <h2 className='pay-title'>Metodos de pago</h2>
                                    <div className='payment-methods'>
                                        <p className='payment-methods-title'>Hasta 12 cuotas sin tarjeta</p>
                                        <div className='payment-icon-container'>
                                            <div className='payment-icon'>
                                                <div className='d-flex payment-icon-size'><span className="material-symbols-outlined">payments</span></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/mercadocreditos.svg" alt="Mercadocreditos" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-methods mt-16'>
                                        <p className='payment-methods-title'>Tarjetas de crédito</p>
                                        <p className='payment-methods-subtitle'>Cuotas sin interes en bancos seleccionados!</p>
                                        <div className='payment-icon-container'>
                                            <div className='payment-icon'>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/visa.svg" alt="Visa.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/americanexpress.svg" alt="americanexpress.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/tarjetanaranja.svg" alt="tarjetanaranja.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/mastercard.svg" alt="mastercard.svg" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-methods mt-16'>
                                        <p className='payment-methods-title'>Tarjetas de débito</p>
                                        <div className='payment-icon-container'>
                                            <div className='payment-icon'>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/visadebito.svg" alt="Visadebito.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/maestro.svg" alt="maestro.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/mastercarddebito.svg" alt="mastercarddebito.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/cabaldebito.svg" alt="cabal.svg" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-methods mt-16'>
                                        <p className='payment-methods-title'>Efectivo</p>
                                        <div className='payment-icon-container'>
                                            <div className='payment-icon'>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/pagofacil.svg" alt="pagofacil.svg" /></div>
                                                <div className='d-flex payment-icon-size'><img src="../multimedia/rapipago.svg" alt="rapipago.svg" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='columnleft'>

                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;

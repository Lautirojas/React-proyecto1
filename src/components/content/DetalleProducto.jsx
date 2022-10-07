import React,{useState} from 'react';
import "../../css/detalle.css"

const DetalleProducto = ({producto}) => {
    const [cantidad, setcantidad] = useState(1);
    const carrito = []
    const agregarAlCarrito = (prod, cant) => {
        let indice = carrito.findIndex(producto => producto.id === prod.id)
        
        if(indice !== -1){
            carrito[indice].cantidad = cant
        } else{
            const prodCarrito = {id: prod.id, cantidad: cant};
            carrito.push(prodCarrito)
        }console.log(carrito)
    }   

    const cantProducto = (operacion) => {
        if(operacion === "+") {
            if(cantidad < producto.stock){
                setcantidad(cantidad + 1)
            }
        }else if(cantidad > 1){
            setcantidad(cantidad - 1)
        }
    }


    return (

        <div className='detalleproducto'>
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
                                                        <div>Ver más formas de entrega</div>
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
                                                        <div>Conocer Más</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex stock-available'>
                                            <p>Stock disponible: {producto.stock}</p>
                                        </div>
                                        <div className="product__sumaresta">
                                            <button className="product__buttons" onClick={() => cantProducto("+")}><span className="material-symbols-outlined">add</span></button>
                                            <input type="tel" autoComplete="off" disabled className="product__input" value={cantidad}/>
                                            <button type="button" className="product__buttons"  onClick={() => cantProducto("-")}><span className="material-symbols-outlined">remove</span></button>
                                        </div>
                                        <div className='d-flex d-column'>
                                            <div className='d-flex d-column justify-center buy-buttons'>
                                                    <button type='submit' className='buy-button'><span>Comprar ahora</span></button>
                                                    <button type='submit' className='buy-button'  onClick={() => agregarAlCarrito(producto, cantidad)}><span>Agregar al Carrito</span></button>
                                            </div>
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
                    <div className='columnleft pb-40'>
                        <div className='product-image-container'>
                            <div className='gallery-images'>
                                <div className='column-images'>
                                    <div className='c-image'>
                                        <label htmlFor="" className='c-image-label'>
                                            <div className='c-image-box'>
                                                <div className='box-image'>
                                                    <img src={`../multimedia/${producto.img}`} alt={producto.nombre} className='image' />
                                                </div>
                                            </div>
                                        </label>
                                        <figure className='c-image-figure'>
                                            <img src={`../multimedia/${producto.img}`} alt={producto.nombre} className="figure-image" />
                                        </figure>
                                    </div>
                                    <div className='c-image'>
                                        <label htmlFor="" className='c-image-label'>
                                            <div className='c-image-box'>
                                                <div className='box-image'>
                                                    <img src={`../multimedia/${producto.img1}`} alt={producto.nombre} className='image' />
                                                </div>
                                            </div>
                                        </label>
                                        <figure className='c-image-figure'>
                                            <img src={`../multimedia/${producto.img}`} alt={producto.nombre} className="figure-image" />
                                        </figure>
                                    </div>
                                    <div className='c-image'>
                                        <label htmlFor="" className='c-image-label'>
                                            <div className='c-image-box'>
                                                <div className='box-image'>
                                                    <img src={`../multimedia/${producto.img2}`} alt={producto.nombre} className='image' />
                                                </div>
                                            </div>
                                        </label>
                                        <figure className='c-image-figure'>
                                            <img src={`../multimedia/${producto.img}`} alt={producto.nombre} className="figure-image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-description'>
                            <div className='description-container'>
                                <div className='description'>
                                    <h2 className='description-title'>Descripción</h2>
                                    <p className='description-content'>
                                    Buzo UNISEX de estilo urbano o STREETWEAR. Pensado como versátil y adaptable, para que pueda ser usado en cualquier ocasión. Vestirlo preferentemente suelto. Diseño y estilo propios, detallados y únicos.
                                    <br /> <br />
                                    Tabla de talles:
                                    <br /><br />
                                    MOLDERIA OVERSIZED
                                    <br /><br />
                                    Talle S: 55cm de ancho – 75m de largo – 62m de largo de manga
                                    <br /><br />
                                    Talle M: 58cm de ancho – 77cm de largo – 64cm de largo de manga
                                    <br /><br />
                                    Talle L: 61cm de ancho – 79cm de largo – 67cm de largo de manga
                                    <br /><br />
                                    FRIZA GRUESA DE ALGODON
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-recommended'>
                    <div className='recommended-products'>
                        <div className='r-products-header'>
                            <h2 className='r-header-title'>Productos relacionados</h2>
                        </div>
                        <div className='r-products-carrousel'>

                        </div>
                    </div>
            </div>
        </div>
    );
}

export default DetalleProducto;

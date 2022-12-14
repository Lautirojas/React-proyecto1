import React, { useContext } from "react";
import Contador from "../contador";
import { CarritoContext } from "../../context/CarritoContext";
const DetalleColumnRight = ({
  producto,
  starActive,
  handlestar,
  cantProducto,
  agregarProducto,
  cantidad,
}) => {
  const { setcantidad } = useContext(CarritoContext);
  return (
    <>
      <div className="columnright pr-16 mt-16">
        <div className="p-sticky">
          <div className="meta">
            <div className="p-relative">
              <div className="meta-header">
                <div>
                  <span>Producto Nuevo</span>
                </div>
                <div className="meta-title">
                  <h1 className="title">{producto[1].nombre}</h1>
                </div>
                <div className="review star-selected">
                  <span
                    className={`${
                      starActive >= 1 ? "star-selected" : null
                    } material-symbols-outlined icon`}
                    onClick={() => handlestar(1)}
                  >
                    grade
                  </span>
                  <span
                    className={`${
                      starActive >= 2 ? "star-selected" : null
                    } material-symbols-outlined icon`}
                    onClick={() => handlestar(2)}
                  >
                    grade
                  </span>
                  <span
                    className={`${
                      starActive >= 3 ? "star-selected" : null
                    } material-symbols-outlined icon`}
                    onClick={() => handlestar(3)}
                  >
                    grade
                  </span>
                  <span
                    className={`${
                      starActive >= 4 ? "star-selected" : null
                    } material-symbols-outlined icon`}
                    onClick={() => handlestar(4)}
                  >
                    grade
                  </span>
                  <span
                    className={`${
                      starActive === 5 ? "star-selected" : null
                    } material-symbols-outlined icon`}
                    onClick={() => handlestar(5)}
                  >
                    grade
                  </span>
                </div>
                <div className="mt-16">
                  <span className="realprice">$5000</span>
                  <div className="dicountprice">
                    <div>
                      <span>${producto[1].precio}</span>
                    </div>
                    <div className="discont">
                      <span className="main-color">34 % OFF</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="d-flex align-items">
                    <figure className="figure-meta">
                      <span className="material-symbols-outlined main-color">
                        local_shipping
                      </span>
                    </figure>
                    <div>
                      <p className="signs">Envios a todo el pais</p>
                      <div className="advices">
                        <div>Ver m??s formas de entrega</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="d-flex">
                    <figure className="figure-meta">
                      <span className="material-symbols-outlined main-color">
                        keyboard_return
                      </span>
                    </figure>
                    <div>
                      <p className="signs">Devoluci??n Gratis</p>
                      <div>
                        <p className="advice-devolucion">
                          30 dias de garantia desde que lo recib??s
                        </p>
                      </div>
                      <div className="advices">
                        <div>Conocer M??s</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-center stock-available">
                  <p>
                    {producto[1].stock === 0
                      ? "Producto Sin Stock"
                      : `Stock diponible : ${producto[1].stock}`}
                  </p>
                </div>
                {producto[1].stock === 0 ? null : cantidad >
                  producto[1].stock ? (
                  setcantidad(1)
                ) : (
                  <Contador
                    cantProducto={cantProducto}
                    cantidad={cantidad}
                    agregarProducto={agregarProducto}
                    producto={producto}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="meta mt-16">
            <div className="pay-method">
              <h2 className="pay-title">Metodos de pago</h2>
              <div className="payment-methods">
                <p className="payment-methods-title">
                  Hasta 12 cuotas sin tarjeta
                </p>
                <div className="payment-icon-container">
                  <div className="payment-icon">
                    <div className="d-flex payment-icon-size">
                      <span className="material-symbols-outlined">
                        payments
                      </span>
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fmercadocreditos.svg?alt=media&token=6ded10b7-cd82-45dc-8e7c-e264fecee76b"
                        alt="Mercadocreditos"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-methods mt-16">
                <p className="payment-methods-title">Tarjetas de cr??dito</p>
                <p className="payment-methods-subtitle">
                  Cuotas sin interes en bancos seleccionados!
                </p>
                <div className="payment-icon-container">
                  <div className="payment-icon">
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fvisa.svg?alt=media&token=2626242d-55b3-4ebb-8536-808a3228404e"
                        alt="Visa.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Famericanexpress.svg?alt=media&token=6cfde9d3-86fb-4524-a9e1-32cc2de8d504"
                        alt="americanexpress.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Ftarjetanaranja.svg?alt=media&token=b5c6e7e0-29c7-4b7a-b028-5ada5fd150ee"
                        alt="tarjetanaranja.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fmastercard.svg?alt=media&token=b59b5fb6-18ee-40d6-95e3-535b5aa2731c"
                        alt="mastercard.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-methods mt-16">
                <p className="payment-methods-title">Tarjetas de d??bito</p>
                <div className="payment-icon-container">
                  <div className="payment-icon">
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fvisadebito.svg?alt=media&token=7cf018e6-55bd-40c7-a427-02e07955d7ef"
                        alt="Visadebito.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fmaestro.svg?alt=media&token=42e8501f-f738-4d51-b5c5-468bd1989eb7"
                        alt="maestro.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fmastercarddebito.svg?alt=media&token=97781ccb-2a62-48ce-90b2-1713468f8fdf"
                        alt="mastercarddebito.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fcabaldebito.svg?alt=media&token=8b8aab84-9ba4-4ca4-88ac-09190ab87f66"
                        alt="cabal.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-methods mt-16">
                <p className="payment-methods-title">Efectivo</p>
                <div className="payment-icon-container">
                  <div className="payment-icon">
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Fpagofacil.svg?alt=media&token=c21bd7fc-1119-4e8e-a803-04307d565a3f"
                        alt="pagofacil.svg"
                      />
                    </div>
                    <div className="d-flex payment-icon-size">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/react-34755-lautaro.appspot.com/o/imgenes%2Frapipago.svg?alt=media&token=9ebab320-f0dd-4f95-8d61-b3fd9c1f2f23"
                        alt="rapipago.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleColumnRight;

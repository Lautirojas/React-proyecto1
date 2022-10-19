import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../../css/cart.css";

const Carrito = () => {
  const { carrito, borrarProducto } = useContext(CarritoContext);
  const [carritoLocal, setCarritoLocal] = useState([]);
  console.log(carrito);
  useEffect(() => {
    const prodMostrar = carrito.map((producto) => {
      let a = (
        <div className="product-carrito" key={producto.id}>
          <div className="image-cart">
            <img src={`${producto.img}`} alt="" />
          </div>
          <div className="info">
            <h3 className="product__title_carrito">{producto.nombre}</h3>
            <div className="main__price__carrito">
              <div>
                ${producto.precio}
                <span className="price__promo__carrito">$8.499</span>
              </div>
              <div className="cart__sumaresta">
                <div>
                  <button className="cart__buttons">
                    <i className="fa-solid fa-minus" />
                  </button>
                </div>
                <input
                  type="tel"
                  autoComplete="off"
                  disabled
                  className="cart__input"
                  defaultValue={`${producto.cantidad}`}
                />
                <div>
                  <button type="button" className="cart__buttons">
                    <i className="fa-solid fa-plus" />
                  </button>
                </div>
              </div>
              <div className="main__gitemcontainer1">
                <div className="main__gitem1">
                  <button
                    type="button"
                    onClick={() => borrarProducto(producto)}
                    className="boton-eliminar"
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      return a;
    });
    setCarritoLocal(prodMostrar);
  }, [carrito, borrarProducto]);

  if (carrito.length === 0) {
    return (
      <div className="main">
        <h1>Carrito Vacio</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="main">{carritoLocal}</div>
      </>
    );
  }
};

export default Carrito;

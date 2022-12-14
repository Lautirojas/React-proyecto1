import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import "../../css/cart.css";

const Carrito = () => {
  const { carrito, borrarProducto, totalPrice } = useContext(CarritoContext);
  const [carritoLocal, setCarritoLocal] = useState([]);
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
                <div></div>
                <input
                  type="tel"
                  autoComplete="off"
                  disabled
                  className="cart__input"
                  defaultValue={`${producto.cantidad}`}
                />
                <div></div>
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
        <div className="carrito-container">
          <div className="font-light cart-header">Carrito de compras</div>
          <div className="carrito">
            <div className="empty-product-in-cart">
              <h5 className="emptycart-title">Tu Carrito esta vacio</h5>
              <p className="emptycart-text">
                ??No sab??s qu?? comprar? ??Miles de productos te esperan!
              </p>
              <Link to="/">
                <button className="emptycart-button">Seguir comprando</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="carrito-container">
          <div className="cart-full">
            <div className="font-light cart-header">Carrito de compras</div>
            <div className="product-in-cart">{carritoLocal}</div>
            <div className="container-pricetotal">
              <div className="pricetotal">
                <span className="total">
                  Total sin envio
                  <span className="price">${totalPrice}</span>
                </span>
              </div>
              <hr className="hr-cart" />
              <div className="cart-button-container">
                <div>
                  <Link to="/Formulario">
                    <button className="emptycart-button">Seguir compra</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Carrito;

import React from "react";

const Contador = ({ cantProducto, cantidad, agregarProducto, producto }) => {
  return (
    <>
      <div className="product__sumaresta">
        <button className="product__buttons" onClick={() => cantProducto("-")}>
          <span className="material-symbols-outlined">remove</span>
        </button>
        <input
          type="tel"
          autoComplete="off"
          disabled
          className="product__input"
          value={cantidad}
        />
        <button
          type="button"
          className="product__buttons"
          onClick={() => cantProducto("+")}
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <div className="d-flex d-column">
        <div className="d-flex d-column justify-center buy-buttons">
          <button type="submit" className="buy-button">
            <span>Comprar ahora</span>
          </button>
          <button
            type="submit"
            className="buy-button"
            onClick={() => agregarProducto(producto, cantidad)}
          >
            <span>Agregar al Carrito</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contador;

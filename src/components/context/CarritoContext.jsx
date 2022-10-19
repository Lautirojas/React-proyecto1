import React, { useState, createContext } from "react";

const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (prod, cant) => {
    const aux = carrito;
    let indice = aux.findIndex((producto) => producto.id === prod[0]);
    if (indice !== -1) {
      aux[indice].cantidad = cant;
    } else {
      const id = prod[0];
      const x = prod[1];
      const prodCarrito = { id, ...x, cantidad: cant };
      aux.push(prodCarrito);
    }
    setCarrito(structuredClone(aux));
    console.log(carrito);
  };

  const borrarProducto = (prod) => {
    const aux = carrito;
    let indice = aux.findIndex((producto) => producto.id === prod.id);
    aux.splice(indice, 1);
    setCarrito(structuredClone(aux));
    console.log(carrito);
  };
  return (
    <>
      <CarritoContext.Provider
        value={{ carrito, agregarProducto, borrarProducto }}
      >
        {props.children}
      </CarritoContext.Provider>
    </>
  );
};

export { CarritoContext, CarritoProvider };

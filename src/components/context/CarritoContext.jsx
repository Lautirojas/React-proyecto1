import React, { useState, createContext } from "react";
import { getProductById, updateProducto } from "../../utils/Firebase";

const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const totalPrice = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
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

  const vaciarCarrito = () => {
    let aux = carrito;
    aux = [];
    setCarrito(aux);
  };
  const updateStock = () => {
    carrito.map((productomap) => {
      const prodId = productomap.id;
      return getProductById(prodId).then((prod) => {
        prod[1].stock -= productomap.cantidad;
        if (
          prod[1].stock <= 0 ||
          (prod[1].stock -= productomap.cantidad === 0)
        ) {
          prod[1].stock = 0;
        } else {
          prod[1].stock += productomap.stock;
        }
        updateProducto(prodId, prod[1]);
      });
    });
  };
  return (
    <>
      <CarritoContext.Provider
        value={{
          carrito,
          agregarProducto,
          borrarProducto,
          vaciarCarrito,
          totalPrice,
          updateStock,
        }}
      >
        {props.children}
      </CarritoContext.Provider>
    </>
  );
};

export { CarritoContext, CarritoProvider };

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/Firebase";
import DetalleProducto from "./DetalleProducto";
const Producto = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id).then((prod) => {
      setProducto(prod);
    });
  }, [id]);

  if (producto.length !== 0) {
    return (
      <>
        <DetalleProducto producto={producto} />
      </>
    );
  }
};

export default Producto;

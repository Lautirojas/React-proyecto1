import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/Firebase";
import DetalleProducto from "./DetalleProducto";
import { CarritoContext } from "../context/CarritoContext";
const Producto = () => {
  const { setcantidad, cantidad } = useContext(CarritoContext);
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  // ESTRELLAS OPINION
  const [starActive, setStarActive] = useState();
  // LABEL IMAGES
  const [label, setLabel] = useState(1);
  const cantProducto = (operacion) => {
    if (operacion === "+") {
      if (cantidad < producto[1].stock) {
        setcantidad(cantidad + 1);
      }
    } else if (cantidad > 1) {
      setcantidad(cantidad - 1);
    }
    if (cantidad > producto[1].stock) {
      setcantidad(producto[1].stock);
    }
  };

  const handleLabel = (props) => {
    setLabel(props);
  };

  const handleStar = (props) => {
    setStarActive(props);
  };

  useEffect(() => {
    getProductById(id).then((prod) => {
      setProducto(prod);
    });
  }, [id]);

  if (producto.length !== 0) {
    return (
      <>
        <DetalleProducto
          producto={producto}
          handleLabel={handleLabel}
          label={label}
          handlestar={handleStar}
          starActive={starActive}
          cantProducto={cantProducto}
          cantidad={cantidad}
          setcantidad={setcantidad}
        />
      </>
    );
  }
};

export default Producto;

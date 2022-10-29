import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../../css/detalle.css";
import DetalleColumnRight from "../layouts/detalleProduct/detalleColumnRight";
import DetalleColumnLeft from "../layouts/detalleProduct/detalleColumnLeft";
import DetalleRecommend from "../layouts/detalleProduct/detalleRecommend";

const DetalleProducto = ({
  producto,
  handleLabel,
  handlestar,
  label,
  starActive,
  cantProducto,
  cantidad,
}) => {
  // CARRITO CONTEXT
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="main">
      <div className="detalleproducto">
        <div className="containerdetalle">
          <div className="productmetacontainer pb-40">
            <DetalleColumnRight
              producto={producto}
              starActive={starActive}
              handlestar={handlestar}
              cantProducto={cantProducto}
              agregarProducto={agregarProducto}
              cantidad={cantidad}
            />
            <DetalleColumnLeft
              producto={producto}
              handleLabel={handleLabel}
              label={label}
            />
          </div>
        </div>
        <DetalleRecommend />
      </div>
    </div>
  );
};

export default DetalleProducto;

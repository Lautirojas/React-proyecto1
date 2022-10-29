import React from "react";
import ImageProduct from "../imageProduct";

const DetalleColumnLeft = ({ producto, handleLabel, label }) => {
  return (
    <>
      <div className="columnleft pb-40">
        <div className="product-image-container">
          <div className="gallery-images">
            <div className="column-images">
              {/* 1 */}
              <div className="c-image">
                <label htmlFor="" className="c-image-label">
                  <div className="c-image-box">
                    <div className="box-image">
                      <img
                        src={`${producto[1].img}`}
                        alt={producto[1].nombre}
                        className="image"
                        onClick={() => handleLabel(1)}
                      />
                    </div>
                  </div>
                </label>
                {label === 1 ? (
                  <ImageProduct producto={producto[1].img} label={label} />
                ) : null}
              </div>
              {/* 2 */}
              <div className="c-image">
                <label htmlFor="" className="c-image-label">
                  <div className="c-image-box">
                    <div className="box-image">
                      <img
                        src={`${producto[1].img1}`}
                        alt={producto[1].nombre}
                        className="image"
                        onClick={() => handleLabel(2)}
                      />
                    </div>
                  </div>
                </label>
                {label === 2 ? (
                  <ImageProduct producto={producto[1].img1} label={label} />
                ) : null}
              </div>
              {/* 3 */}
              <div className="c-image">
                <label htmlFor="" className="c-image-label">
                  <div className="c-image-box">
                    <div className="box-image">
                      <img
                        src={`${producto[1].img2}`}
                        alt={producto[1].nombre}
                        className="image"
                        onClick={() => handleLabel(3)}
                      />
                    </div>
                  </div>
                </label>
                {label === 3 ? (
                  <ImageProduct producto={producto[1].img2} label={label} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <div className="description-container">
            <div className="description">
              <h2 className="description-title">Descripción</h2>
              <p className="description-content">
                Buzo UNISEX de estilo urbano o STREETWEAR. Pensado como versátil
                y adaptable, para que pueda ser usado en cualquier ocasión.
                Vestirlo preferentemente suelto. Diseño y estilo propios,
                detallados y únicos.
                <br /> <br />
                Tabla de talles:
                <br />
                <br />
                MOLDERIA OVERSIZED
                <br />
                <br />
                Talle S: 55cm de ancho – 75m de largo – 62m de largo de manga
                <br />
                <br />
                Talle M: 58cm de ancho – 77cm de largo – 64cm de largo de manga
                <br />
                <br />
                Talle L: 61cm de ancho – 79cm de largo – 67cm de largo de manga
                <br />
                <br />
                FRIZA GRUESA DE ALGODON
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleColumnLeft;

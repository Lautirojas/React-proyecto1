import React from "react";

const ImageProduct = ({ producto, label }) => {
  return (
    <>
      <figure className="c-image-figure">
        <img
          src={`${producto}`}
          alt={producto[1].nombre}
          className="figure-image"
        />
      </figure>
    </>
  );
};

export default ImageProduct;

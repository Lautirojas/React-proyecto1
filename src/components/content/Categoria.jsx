import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../../utils/Firebase";

const Categoria = () => {
  const [Productos, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProducts().then((producto) => {
      const productoscategoria = producto.filter(
        (productos) => productos[1].categoria === id
      );
      const cards = productoscategoria.map((producto) => {
        let carlos = (
          <div className="card" key={producto[0]}>
            <Link to={`/productos/${producto[0]}`}>
              <img src={producto[1].img} alt={producto[1].nombre} />
              <div className="card-description">
                <span className="card-clothes">{producto[1].categoria}</span>
                <h2 className="card-name">{producto[1].nombre}</h2>
                <h2 className="card-price">${producto[1].precio}</h2>
                <span className="card-product">Ver Productos</span>
              </div>
            </Link>
          </div>
        );
        return carlos;
      });
      setProducto(cards);
    });
  }, [id]);

  return (
    <>
      <div className="main">
        <section className="cards-container">
          <h2 className="cards-subtitle">{}</h2>
          <article className="cards">{Productos}</article>
        </section>
      </div>
    </>
  );
};

export default Categoria;

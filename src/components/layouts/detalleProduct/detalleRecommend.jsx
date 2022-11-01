import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper";
import { getProducts } from "../../../utils/Firebase";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/home.css";

const DetalleRecommend = () => {
  const [Productos, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProducts().then((producto) => {
      //Encuentro el producto
      const productoscategoria = producto.filter(
        (productos) => productos[0] === id
      );
      //Encuentro la categoria
      const cat = productoscategoria.find((cat) => cat[1].categoria);
      //Encuentro todos los productos de la misma categoria
      const categorias = producto.filter(
        (productoso) => productoso[1].categoria === cat[1].categoria
      );
      //Indice
      const i = categorias.indexOf(cat);
      //Splice del produdcto en el que estoy
      categorias.splice(i, 1);

      const cards = categorias.map((producto) => {
        let carlos = (
          <SwiperSlide className="testimonio-recommended" key={producto[0]}>
            <div className="slide-recommended">
              <Link to={`/productos/${producto[0]}`}>
                <div className="recommended-container">
                  <img src={producto[1].img} alt="" />
                  <div className="recommended-description">
                    <h2 className="recommend-name">{producto[1].nombre}</h2>
                    <h2 className="recommend-price">${producto[1].precio}</h2>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
        return carlos;
      });
      setProducto(cards);
    });
  }, [id]);
  return (
    <>
      <div className="container-recommended">
        <div className="recommended-products">
          <section className="section-recommended">
            <div className="recommended-carrousel">
              <div className="r-products-header">
                <h2 className="r-header-title">Productos relacionados</h2>
              </div>
              <div className="r-products-carrousel">
                <Swiper
                  className="mySwiper"
                  modules={[Navigation, Pagination, A11y]}
                  slidesPerView={3}
                  spaceBetween={0}
                  navigation={true}
                  pagination={{ clickable: true }}
                >
                  {Productos}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalleRecommend;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { getProducts } from "../../../utils/Firebase";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../css/home.css";

const DetalleRecommend = () => {
  const [Productos, setProducto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProducts().then((producto) => {
      const productoscategoria = producto.filter(
        (productos) => productos[1].categoria === "Buzos"
      );
      console.log(productoscategoria);
      const cards = productoscategoria.map((producto) => {
        let carlos = (
          <Swiper
            key={producto[0]}
            className="mySwiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            scrollbar={{ hide: true }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="testimonio-recommended">
              <div className="slide-recommended">
                <Link to={`/productos/${producto[0]}`}>
                  <div>
                    <img src={producto[1].img} alt="" />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
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
          <div className="r-products-header">
            <h2 className="r-header-title">Productos relacionados</h2>
          </div>
          <div className="r-products-carrousel">{Productos}</div>
        </div>
      </div>
    </>
  );
};

export default DetalleRecommend;

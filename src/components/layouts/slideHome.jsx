import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../css/home.css";

const SlideHome = () => {
  return (
    <>
      <>
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          scrollbar={{ hide: true }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonio">
            <div className="slide-container">
              <div className="slides"></div>
              <Link to="/Categoria/Remeras" className="link-slide">
                <div className="slide-text">
                  <div className="slidecontent">
                    10%OFF EN EFECTIVO O TRANSFERENCIA
                  </div>
                  <div className="btn-container">
                    <span className="btn-light">Click Here</span>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonio">
            <div className="slide-container">
              <div className="slides1"></div>
              <Link className="link-slide">
                <div className="slide-text">
                  <div className="slidecontent">ENVIOS A TODO EL PAIS</div>
                  <div className="btn-container">
                    <span className="font-light">
                      Podras realizar el seguimiento desde el celular
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonio">
            <div className="slide-container">
              <div className="slides2"></div>
              <a
                href="https://goo.gl/maps/YRpfQnUcbXwutUM78"
                className="link-slide"
              >
                <div className="slide-text">
                  <div className="slidecontent">
                    TENEMOS LOCAL ABIERTO DE LUNES A VIERNES
                  </div>
                  <div className="btn-container">
                    <span className="btn-light">Ver Ubicación</span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default SlideHome;

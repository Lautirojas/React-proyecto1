import React from "react";
import { Link } from "react-router-dom";

const ContentHome = () => {
  return (
    <>
      <div className="categoryhome">
        <div className="titlehome">
          <h2 className="text-center">Navegá por categorías</h2>
        </div>
        <div className="categorys">
          <div className="of-hidden p-relative categoryhome_boxes">
            <div>
              <div className="categoryhome_img"></div>
            </div>
            <div className="categoryhome_content">
              <h2>Buzos</h2>
              <div>
                <Link to="/Categoria/Buzos">
                  <span className="btn-light-categorys">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="of-hidden p-relative categoryhome_boxes">
            <div>
              <div className="categoryhome_img1"></div>
            </div>
            <div className="categoryhome_content">
              <h2>Remeras</h2>
              <div>
                <Link to="/Categoria/Remeras">
                  <span className="btn-light-categorys">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="of-hidden p-relative categoryhome_boxes">
            <div>
              <div className="categoryhome_img2"></div>
            </div>
            <div className="categoryhome_content">
              <h2>Pantalones</h2>
              <div>
                <Link to="/Categoria/Pantalones">
                  <span className="btn-light-categorys">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="categorys">
          <div className="of-hidden p-relative categoryhome_boxes1">
            <div>
              <div className="categoryhome_img3"></div>
            </div>
            <div className="categoryhome_content">
              <h2>Accesorios</h2>
              <div>
                <Link to="/Categoria/Accesorios">
                  <span className="btn-light-categorys">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="of-hidden p-relative categoryhome_boxes1">
            <div>
              <div className="categoryhome_img4"></div>
            </div>
            <div className="categoryhome_content">
              <h2>Shorts</h2>
              <div>
                <Link to="/Categoria/Shorts">
                  <span className="btn-light-categorys">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHome;

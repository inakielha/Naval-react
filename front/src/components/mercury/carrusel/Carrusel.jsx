import Slider from "react-slick";
import s from "./Carrusel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY } from "../../../redux/actions/actions";

export default function Carrusel() {
  const [category, setCategory] = useState("Repuestos y Accesorios");
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    console.log(e.target.innerText);
    setCategory(e.target.innerText);
    dispatch(CATEGORY(e.target.innerText));
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className={s.section}>
      <div className={s.container}>
        {/* <Slider className={s.slider} {...settings}> */}
        <Slider {...settings}>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "Motores" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Motores</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "Sist. Integral de Propulsión" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Sist. Integral de Propulsión</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              style={
                category === "Repuestos y Accesorios" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
              className={s.borde}
            >
              <h3>Repuestos y Accesorios</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "Concesionarios y Servicios" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Concesionarios y Servicios</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "Contacto" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Contacto</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

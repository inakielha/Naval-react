import s from "./Motosinfo.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/e5/carrusel/Carrusel1.jpg";
import img2 from "../../../../assets/ecooter/e5/carrusel/Carrusel2.jpg";
import img3 from "../../../../assets/ecooter/e5/carrusel/Carrusel3.jpg";
import img4 from "../../../../assets/ecooter/e5/carrusel/Carrusel4.jpg";
import img5 from "../../../../assets/ecooter/e5/carrusel/Carrusel5.jpg";
import img6 from "../../../../assets/ecooter/e5/carrusel/carrusel6.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useRef } from "react";


export default function MotosInfo({ isMobile }) {
  const sliderRef = useRef(null);
  let itemsShowCarrusel = 0
  isMobile ? itemsShowCarrusel = 3 : itemsShowCarrusel = 4
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: itemsShowCarrusel,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack size={isMobile ? "2em" : "5em"} color="#6EC1E4" /></div>
        <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward size={isMobile ? "2em" : "5em"} color="#6EC1E4" /></div>
        <Slider className={s.slider} {...settings} ref={sliderRef}>
          <div className={s.slide}>
            <div >
              <img src={img1} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>ABS Delantero y trasero</h5>
              <ul>
                <li><span>
                  Dificulta la pérdida de control.
                </span>
                </li>
                <li><span>

                  Distancia de frenada más corta.
                </span>
                </li>
                <li><span>
                  Capacidad de maniobra durante la frenada.
                </span>
                </li>
                <li><span>
                  Menor probabilidad de tener un accidente.
                </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img2} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>Ruedas de gran diámetro</h5>
              <ul>
                <li>
                  <span>
                    Una rueda delantera más grande de 14 pulgadas para una
                    estabilidad sin precedentes y una trasera de 13 pulgadas.

                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img3} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>TESTEADO CON 3 MILLONES DE VIBRACIONES</h5>
              <ul>
                <li><span>
                  Estructura de jaula.
                </span>
                </li>
                <li><span>
                  Diseño superligero.
                </span>
                </li>
                <li><span>
                  Alta rigidez.
                </span>
                </li>
                <li><span>
                  Carga de 300 Kg.
                </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img4} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>Transmisión por cadena sellada</h5>
              <ul>
                <li><span>
                  Debido a la gran potencia del motor, el sistema de cadena es el más adecuado para garantizar un funcionamiento perfecto.
                </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img5} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>baúl para el casco</h5>
              <ul>
                <li><span>

                  Con las baterías en posición central se consigue un reparto de masas perfecto y hueco para el casco debajo del asiento.
                </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img6} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>Basculante de aluminio</h5>
              <ul>
                <li><span>

                  Basculante de doble brazo más ligero con una mayor durabilidad y sostenibilidad.
                </span>
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

import s from "./Motosinfo.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/e3/motosInfo/caracterisitas1.jpg";
import img2 from "../../../../assets/ecooter/e3/motosInfo/caracterisitas2.jpg";
import img3 from "../../../../assets/ecooter/e3/motosInfo/caracterisitas3.jpg";
import img4 from "../../../../assets/ecooter/e3/motosInfo/caracterisitas4.jpg";
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
        {/* <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack size={isMobile ? "2em" : "5em"} color="#6EC1E4" /></div> */}
        {/* <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward size={isMobile ? "2em" : "5em"} color="#6EC1E4" /></div> */}
        <Slider className={s.slider} {...settings} ref={sliderRef}>
          <div className={s.slide}>
            <div >
              <img src={img1} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>CUADRO</h5>
              <ul>
                <li><span>
                  Testeado con 3 millones de vibraciones
                </span>
                </li>
                <li><span>
                  Cuadro de soldadura robótica totalmente automatizada.
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
              <h5>FULL LED</h5>
              <ul>
                <li>
                  <span>
                    Todo el sistema de iluminación en tecnología LED totalmente de serie para proporcionar un campo de visión perfecto con un consumo de energía mínimo.
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
              <h5>SMART DESIGN</h5>
              <ul>
                <li><span>
                  Diseñada con reparto de pesos lo más al centro posible para obtener una estabilidad y sin perder espacio para los pies ni la capacidad de extraer las baterías.
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
              <h5>POTENCIA EXTREMA</h5>
              <ul>
                <li><span>
                  Motor central de alto rendimiento con sistema de transmisión de doble fase engranaje-cadena que proporciona un equilibrio perfecto entre velocidad máxima y torque.
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

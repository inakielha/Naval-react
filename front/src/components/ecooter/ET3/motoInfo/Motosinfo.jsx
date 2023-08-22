import s from "./Motosinfo.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/et3/ESCRITORIO/motosInfo/Enmascarar grupo 444.jpg";
import img2 from "../../../../assets/ecooter/et3/ESCRITORIO/motosInfo/Enmascarar grupo 446.jpg";
import img3 from "../../../../assets/ecooter/et3/ESCRITORIO/motosInfo/Enmascarar grupo 447.jpg";
import img4 from "../../../../assets/ecooter/et3/ESCRITORIO/motosInfo/Enmascarar grupo 445.jpg";
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
              <h5>freno flexible</h5>
              <ul>
                <li><span>
                  El sistema de doble freno le brinda más seguridad a la conducción.
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
              <h5>alto confort</h5>
              <ul>
                <li>
                  <span>
                    Asiento relleno de esponja de espuma fría de alta densidad y cuidados de ingeniaría.
                    En su conducción no sentirá fatiga
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
              <h5>tiras LED</h5>
              <ul>
                <li><span>
                  El conjunto de luces traseras de alto brillo y el excelente impacto visual, garantiza una conducción nocturna más segura.
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
              <h5>neumáticos</h5>
              <ul>
                <li><span>
                  Linea cross-groove, más resistencia y mejor agarre al suelo.
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

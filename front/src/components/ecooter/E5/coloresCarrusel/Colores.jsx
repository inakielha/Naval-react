import s from "./Colores.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/gris claro.jpg";
import img2 from "../../../../assets/ecooter/gris.jpg";
import img3 from "../../../../assets/ecooter/negro.jpg";
import img4 from "../../../../assets/ecooter/rojo.jpg";
import img5 from "../../../../assets/ecooter/blanco.jpg";
import { useRef, useState } from "react";

export default function Colores() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);
  const handleNextSlide = () => {
    if (sliderRef.current) {
      setCurrentSlide(currentSlide - 1)
      sliderRef.current.slickPrev();
    }
  };
  
  const handlePrevSlide = () => {
    if (sliderRef.current) {
      setCurrentSlide(currentSlide + 1)
      sliderRef.current.slickNext();
    }
  };

  const handleSwipeEnd = (event) => {
    console.log('Deslizamiento finalizado');
    console.log(event)

    // Puedes hacer lo que necesites al finalizar el deslizamiento aquí
  };


  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current) => {
      // current === 4 ? current = 0 : current = current + 1
      setCurrentSlide(current + 1);
      console.log(current + 1)
    },
  };
  return (
    <div className={s.section}>
      <h3>COLORES</h3>
      <div className={s.containerColores}>
        <div className={s.absolute} onClick={()=> handleNextSlide()}><IoIosArrowBack className={s.flecha} color="#6EC1E4"/></div>
        <div className={s.absoluteR} onClick={()=> handlePrevSlide()}><IoIosArrowForward className={s.flecha} color="#6EC1E4"/></div>
        <Slider className={s.slider} {...settings} ref={sliderRef}>
          <div className={currentSlide === 0 ? s.red : s.slide}>
            <img src={img1} alt="test" />
          </div>
          <div className={currentSlide === 1 ? s.red : s.slide}>
            <img src={img2} alt="test" />
          </div>
          <div className={currentSlide === 2 ? s.red : s.slide}>
            <img src={img3} alt="test" />
          </div>
          <div className={currentSlide === 3 ? s.red : s.slide}>
            <img src={img4} alt="test" />
          </div>
          <div className={currentSlide === 4 ? s.red : s.slide}>
            <img src={img5} alt="test" />
          </div>
        </Slider>
      </div>
      <div className={s.btnCont}>
        <button>DESCARGA EL CATALOGO</button>
      </div>
    </div>
  );
}

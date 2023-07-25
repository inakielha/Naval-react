import Slider from "react-slick";
import s from "./Galeria.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/foto1.jpg"
import img2 from "../../../../assets/ecooter/foto2.jpg"
import img3 from "../../../../assets/ecooter/foto3.jpg"
import img4 from "../../../../assets/ecooter/foto4.jpg"
import img5 from "../../../../assets/ecooter/foto5.jpg"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

import { useRef } from "react";


export default function Galeria() {
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3.1,
    autoplay: true,
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
    <>
      <div className={s.section}>
        <h3>galería de imagenes</h3>
        <div className={s.container}>
          <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack className={s.flecha} color="#fff" /></div>
          <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward className={s.flecha} color="#fff" /></div>
          <Slider className={s.slider} {...settings} ref={sliderRef}>
            <div className={s.slide}>
              <img src={img1} alt="test" />
            </div>
            <div className={s.slide}>
              <img src={img2} alt="test" />
            </div>
            <div className={s.slide}>
              <img src={img3} alt="test" />
            </div>
            <div className={s.slide}>
              <img src={img4} alt="test" />
            </div>
            <div className={s.slide}>
              <img src={img5} alt="test" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

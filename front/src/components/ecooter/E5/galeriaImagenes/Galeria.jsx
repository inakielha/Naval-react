import Slider from "react-slick";
import s from "./Galeria.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/e5/galeria/foto1.jpg"
import img2 from "../../../../assets/ecooter/e5/galeria/foto2.jpg"
import img3 from "../../../../assets/ecooter/e5/galeria/foto3.jpg"
import img4 from "../../../../assets/ecooter/e5/galeria/foto4.jpg"
import img5 from "../../../../assets/ecooter/e5/galeria/foto5.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import { useRef, useState } from "react";
import ImageOpen from "./ImageOpen";
import { useDispatch, useSelector } from "react-redux";
import { BLACK_BACKGROUND } from "../../../../redux/actions/actions";
import { pathImages } from "../../../../pathImages";


export default function Galeria() {
  const Color = useSelector((state) => state.clientReducer.backgroundColor)
  const dispatch = useDispatch()
  const sliderRef = useRef(null);
  const [imagen, setImagen] = useState({ open: false, src: "" })


  let imgArr = [pathImages+img1, pathImages+img2, pathImages+img3, pathImages+img4, pathImages+img5]
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

  const bigPicture = (e) => {
    setImagen({ open: true, src: e.target.src })
    dispatch(BLACK_BACKGROUND("black"))
  }

  const handleNextSlide = () => {
    if (sliderRef.current) {
      let srcCrurrent = sliderRef.current.innerSlider.state.currentSlide
      sliderRef.current.slickPrev();
      if (imagen.open) {
        setImagen({ open: true, src: imgArr[srcCrurrent] })
        console.log({ open: imagen.open, src: imgArr[srcCrurrent] })
      }
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      if (imagen.open) {
        let srcCrurrent = sliderRef.current.innerSlider.state.currentSlide
        setImagen({ open: true, src: imgArr[srcCrurrent] })
        console.log({ open: imagen.open, src: imgArr[srcCrurrent] })
      }
    }
  };

  const closeDialog = (e) => {
    console.log(e)
    if (imagen.open && e.target.id === "close") {
      setImagen({ ok: false, src: "" })
      dispatch(BLACK_BACKGROUND("neutral"))
    }
  }
  return (
    <>
      <div className={s.section}>
        {imagen.open && <ImageOpen src={imagen.src} setImagen={setImagen} imagen={imagen} />}
        {Color === "black" && <div id="close" onClick={(e) => closeDialog(e)} className={s.filtro}></div>}
        <h3>galería de imagenes</h3>
        <div className={s.container}>
          <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack className={s.flecha} color="#fff" /></div>
          <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward className={s.flecha} color="#fff" /></div>
          <Slider className={s.slider} {...settings} ref={sliderRef}>
            <div className={s.slide}>
              <img onClick={(e) => bigPicture(e)} src={pathImages + img1} alt="test" />
            </div>
            <div className={s.slide}>
              <img onClick={(e) => bigPicture(e)} src={pathImages + img2} alt="test" />
            </div>
            <div className={s.slide}>
              <img onClick={(e) => bigPicture(e)} src={pathImages + img3} alt="test" />
            </div>
            <div className={s.slide}>
              <img onClick={(e) => bigPicture(e)} src={pathImages + img4} alt="test" />
            </div>
            <div className={s.slide}>
              <img onClick={(e) => bigPicture(e)} src={pathImages + img5} alt="test" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

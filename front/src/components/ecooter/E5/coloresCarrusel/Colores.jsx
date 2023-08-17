import s from "./Colores.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/ecooter/e5/colores/gris claro.jpg";
import img2 from "../../../../assets/ecooter/e5/colores/gris.jpg";
import img3 from "../../../../assets/ecooter/e5/colores/negro.jpg";
import img4 from "../../../../assets/ecooter/e5/colores/rojo.jpg";
import img5 from "../../../../assets/ecooter/e5/colores/blanco.jpg";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgOpenColors from "./imgOpenColors";
import pdf from "../../../../assets/ecooter/e5/E5.pdf"

export default function Colores() {
  const dispatch = useDispatch()
  const Color = useSelector((state) => state.clientReducer.backgroundColor)
  const [currentSlide, setCurrentSlide] = useState(1);
  const [desplazamiento, setDesplazamiento] = useState("")
  const sliderRef = useRef(null);
  const [imagen, setImagen] = useState({ open: false, src: "" })

  let imgArr = [img1, img2, img3, img4, img5]

  const handleNextSlide = () => {
    if (sliderRef.current) {
      // setCurrentSlide((prev)=> prev === 0 ? prev = 4 : parseInt(prev) - 1)
      sliderRef.current.slickPrev();
      setDesplazamiento("atras")
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      // setCurrentSlide((prev)=> prev === 4 ? prev = 0 : parseInt(prev) + 1)
      sliderRef.current.slickNext();
      setDesplazamiento("adelante")
    }
  };

  const bigPicture = (e) => {
    console.log(e.target.id)
    setCurrentSlide(parseInt(e.target.id))
  }
  const defineClass = (index) => {
    if (currentSlide == index) {
      // console.log({index: currentSlide})
      return s.red
    } else if (currentSlide == index + 1 || currentSlide == 0 && index == 4) {
      // console.log({index: currentSlide}, "left")

      return s.leftSlide
    } else if (currentSlide == index - 1 || currentSlide == 4 && index == 0) {
      // console.log({index: currentSlide}, "right")
      return s.rightSlide
    } else {
      // console.log({index: currentSlide}, "nadaaa")
      return s.slide
    }
  }

  const handleDownload = () => {
    const fileUrl = '../../../../assets/ecooter/E5.pdf'; // Reemplaza esto con la URL real del PDF
    const fileName = 'E5.pdf'; // Reemplaza esto con el nombre que desees para el archivo

    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = pdf;
    link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
    link.download = fileName;
    link.click();
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    beforeChange: (current) => {
      if (desplazamiento === "atras") {
        setCurrentSlide((prev) => prev === 0 ? prev = 4 : parseInt(prev) - 1)

      } else {
        setCurrentSlide((prev) => prev === 4 ? prev = 0 : parseInt(prev) + 1)


      }
    },
  };

  let style = { backgroundColor: "red" }

  return (
    <div className={s.section}>
      {Color === "black" && <div className={s.filtro}></div>}

      <h3>COLORES</h3>
      <div className={s.containerColores}>
        <div className={s.absolute} onClick={() => handleNextSlide()}><IoIosArrowBack className={s.flecha} color="#6EC1E4" /></div>
        <div className={s.absoluteR} onClick={() => handlePrevSlide()}><IoIosArrowForward className={s.flecha} color="#6EC1E4" /></div>
        <Slider className={s.slider} {...settings} ref={sliderRef}>
          <div className={s.test}>
            <div className={defineClass(0)}>
              {/* <div className={currentSlide == 0 ? s.red : s.slide}></div> */}
              <img id={0} onClick={(e) => bigPicture(e)} src={img1} alt="test" />
            </div>
          </div>
          <div className={s.test}>
            <div className={defineClass(1)}>
              {/* <div className={currentSlide == 1 ? s.red : s.slide}></div> */}
              <img id={1} onClick={(e) => bigPicture(e)} src={img2} alt="test" />
            </div>
          </div>
          <div className={s.test}>
            <div className={defineClass(2)}>
              {/* <div className={currentSlide == 2 ? s.red : s.slide}></div> */}
              <img id={2} onClick={(e) => bigPicture(e)} src={img3} alt="test" />
            </div>
          </div>
          <div className={s.test}>
            <div className={defineClass(3)}>
              {/* <div className={currentSlide == 3 ? s.red : s.slide}></div> */}
              <img id={3} onClick={(e) => bigPicture(e)} src={img4} alt="test" />
            </div>
          </div>
          <div className={s.test}>
            <div className={defineClass(4)}>
              {/* <div className={currentSlide == 4 ? s.red : s.slide}></div> */}
              <img id={4} onClick={(e) => bigPicture(e)} src={img5} alt="test" />
            </div>
          </div>
        </Slider>
      </div>
      <div className={s.btnCont}>
        <button onClick={()=>handleDownload()}>DESCARGA EL CATALOGO</button>
      </div>
    </div>
  );
}

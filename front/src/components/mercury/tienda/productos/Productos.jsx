import Slider from "react-slick";
import s from "./Productos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/prd1.svg"
import img2 from "../../../../assets/prd2.svg"
import img3 from "../../../../assets/prd3.svg"
import img4 from "../../../../assets/prd4.svg"

export default function Productos() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={s.section}>
      {/* <div className={s.contenedor}> */}
        <div className={s.categorias}>
          <span>Aceites y Lubricantes</span>
          <span>Controles</span>
          <span>Relojes</span>
          <span>Hélices</span>
        </div>
        <div className={s.productos}>
          <Slider {...settings}>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img1} alt="promo" />
              </div>
              <span>2 Tiempos</span>
            </div>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img2} alt="promo" />
              </div>
              <span>4 Tiempos</span>
            </div>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img3} alt="promo" />
              </div>
              <span>Lubricantes</span>
            </div>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img4} alt="promo" />
              </div>
              <span>Lubricantes</span>
            </div>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img1} alt="promo" />
              </div>
              <span>2 Tiempos</span>
            </div>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={img2} alt="promo" />
              </div>          
              <span>4 Tiempos</span>
            </div>
          </Slider>
        </div>
      {/* </div> */}
    </div>
  );
}

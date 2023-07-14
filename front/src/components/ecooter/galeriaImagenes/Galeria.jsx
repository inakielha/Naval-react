import Slider from "react-slick";
import s from "./Galeria.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/ecooter/foto1.jpg"
import img2 from "../../../assets/ecooter/foto2.jpg"
import img3 from "../../../assets/ecooter/foto3.jpg"
import img4 from "../../../assets/ecooter/foto4.jpg"
import img5 from "../../../assets/ecooter/foto5.jpg"


export default function Galeria() {
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
  return (
    <>
    <div className={s.section}>
        <h3>galería de imagenes</h3>
      <div className={s.container}>
        <Slider className={s.slider} {...settings}>
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

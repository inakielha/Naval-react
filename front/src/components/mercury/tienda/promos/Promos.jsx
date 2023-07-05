import Slider from "react-slick";
import s from "./Promo.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import producto from "../../../../assets/producto.svg";

export default function Promos() {
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
      <Slider {...settings}>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={producto} alt="promo" />
          </div>
          <div className={s.texto}>
            <h4>Kit 40% Off</h4>
            <span>100 hs: Kit de Servicio</span>
          </div>
          <button className={s.btn}>COMPRAR</button>
        </div>
      </Slider>
    </div>
  );
}

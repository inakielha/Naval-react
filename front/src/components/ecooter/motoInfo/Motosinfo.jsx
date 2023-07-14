import s from "./Motosinfo.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/ecooter/Carrusel1.jpg";
import img2 from "../../../assets/ecooter/Carrusel2.jpg";
import img3 from "../../../assets/ecooter/Carrusel3.jpg";
import img4 from "../../../assets/ecooter/Carrusel4.jpg";
import img5 from "../../../assets/ecooter/Carrusel5.jpg";
import img6 from "../../../assets/ecooter/carrusel6.jpg";
import img7 from "../../../assets/ecooter/carrusel7.jpg";

export default function MotosInfo() {
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
    <div className={s.section}>
      <div className={s.container}>
        <Slider className={s.slider} {...settings}>
          <div className={s.slide}>
            <div>
              <img src={img1} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>ABS Delantero y trasero</h5>
              <ul>
                <li>Dificulta la pérdida de control.</li>
                <li>Distancia de frenada más corta.</li>
                <li>Capacidad de maniobra durante la frenada.</li>
                <li>Menor probabilidad de tener un accidente.</li>
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
                  Una rueda delantera más grande de 14 pulgadas para una
                  estabilidad sin precedentes y una trasera de 13 pulgadas.{" "}
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
                <li>Estructura de jaula.</li>
                <li>Diseño superligero.</li>
                <li>Alta rigidez.</li>
                <li>Carga de 300 Kg.</li>
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
                <li>Debido a la gran potencia del motor, el sistema de cadena es el más adecuado para garantizar un funcionamiento perfecto.</li>
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
                <li>Con las baterías en posición central se consigue un reparto de masas perfecto y hueco para el casco debajo del asiento. </li>
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
                <li>Basculante de doble brazo más ligero con una mayor durabilidad y sostenibilidad.</li>
              </ul>
            </div>
          </div>
          <div className={s.slide}>
            <div>
              <img src={img7} alt="test" />
            </div>
            <div className={s.texto}>
              <h5>TEST</h5>
              <ul>
                <li>habia una vez un perro</li>
                <li>habia una vez un perro</li>
                <li>habia una vez un perro</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

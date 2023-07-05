import s from "./ProductosMotores.module.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/prd1.svg";
import img2 from "../../../../assets/prd2.svg";
import img3 from "../../../../assets/prd3.svg";
import img4 from "../../../../assets/prd4.svg";

export default function ProductosMotores() {
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
      <div className={s.textCont}>
        <div className={s.categorias}>
          <span>Cuatro Tiempos</span>
          <span>Sea Pro</span>
          <span>Verado</span>
          <span>Dos Tiempos</span>
          <span>Racing</span>
        </div>
      </div>
      {/* <div className={s.productos}> */}
      <div className={s.borde}>
        <div className={s.imgContainer}>
          <img src={img1} alt="promo" />
        </div>
        <div className={s.MotoresInfo}>
          <h4>3.5-60 hp</h4>
          <span>El fueraborda más popular en el agua. Sin comparación.</span>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={s.borde}>
        <div className={s.imgContainer}>
          <img src={img1} alt="promo" />
        </div>
        <div className={s.MotoresInfo}>
          <h4>3.5-60 hp</h4>
          <span>El fueraborda más popular en el agua. Sin comparación.</span>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={s.borde}>
        <div className={s.imgContainer}>
          <img src={img1} alt="promo" />
        </div>
        <div className={s.MotoresInfo}>
          <h4>3.5-60 hp</h4>
          <span>El fueraborda más popular en el agua. Sin comparación.</span>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={s.borde}>
        <div className={s.imgContainer}>
          <img src={img1} alt="promo" />
        </div>
        <div className={s.MotoresInfo}>
          <h4>3.5-60 hp</h4>
          <span>El fueraborda más popular en el agua. Sin comparación.</span>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={s.borde}>
        <div className={s.imgContainer}>
          <img src={img1} alt="promo" />
        </div>
        <div className={s.MotoresInfo}>
          <h4>3.5-60 hp</h4>
          <span>El fueraborda más popular en el agua. Sin comparación.</span>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={s.informacionCont}>
        <div className={s.informacion}>
          <h3>Mercury University</h3>
          <h4>Requisitos para la presentación de nuevos mecánicos</h4>
          <ul>
            <li>. Apellido, nombre y DNI</li>
            <li>. Teléfono de contacto permanente.</li>
            <li>. Dirección de taller y localización en Google Maps.</li>
            <li>. Indicar taller propio o de terceros</li>
            <li>. Antiguedad en la zona</li>
            <li>
              . Aceptación de Tarifas Oficiales establecidas por el Fabricante
            </li>
            <li>. Indicar si es Monotributista o Sociedad (indicar CUIT)</li>
            <li>. Puesto dentro de la organización.</li>
            <li>
              A: En relación de dependencia ( indicar empleador y Antiguedade
              con el mismo )
            </li>
            <li>B : Por cuenta propia indicar antigüedad</li>
            <li>. Fotografía exterior en interior del taller.</li>
            <li>. Fotocarnet personal</li>
            <li>
              . Presentar recomendación de los Astilleros/Prefectura/Mecánico ya
              autorizado.
            </li>
            <li>
              . Indicar a que distancia de su locación està dispuesto a
              trasladarse.
            </li>
            <li>
              . Indicar si está en capacidad de mantener guardia los fines de
              semana / Urgencias.
            </li>
            <li>
              . Indicar que vehículo posee para identificar corporativamente.
            </li>
          </ul>
          <p>
            Enviar solicitud por mail a <span>info@navalmotor.com </span>
            De ser seleccionado se le informará fechas, modalidad y condiciones
            de los cursos en español.
          </p>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

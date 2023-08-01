import img from "../../../../assets/ecooter/portada.png";
import imgMobile from "../../../../assets/ecooter/portadamodificada.jpg";
import imgAbs from "../../../../assets/ecooter/abs.jpg";
import E5 from "../../../../assets/ecooter/E5.jpg";
import s from "./Header.module.css";
import MotosInfo from "../motoInfo/Motosinfo";


export default function HeaderEcooter({ isMobile }) {
  return (
    <>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={isMobile ? E5 : img} alt="portada" />
          {/* <img src={isMobile ? imgMobile : img} alt="portada" /> */}
        </div>
        <div className={s.absolute}>
          <div className={s.descargarFicha}>
            <span>DESCARGAR FICHA</span>
          </div>
          <div className={s.info}>
            <div className={s.textCont}>
              <span className={s.number}>8000</span>
              <span className={s.texto}>WHATSS DE POTENCIA</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>150</span>
              <span className={s.texto}>km de autonomía</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>110</span>
              <span className={s.texto}>km/h</span>
            </div>
          </div>
          <div className={s.titContainer}>
            <div className={s.titulo}>
              <p>E5</p>
              <span>DESCARGAR FICHA</span>
            </div>
            <p className={s.ltres}>L3</p>
          </div>
        </div>
        <div className={s.filtro}></div>
      </div>
      <div className={s.sectionTwo}>
        <div className={s.imgContainer}>
          <img src={imgAbs} alt="abs" />
        </div>
      </div>
      <MotosInfo isMobile={isMobile} />
    </>
  );
}

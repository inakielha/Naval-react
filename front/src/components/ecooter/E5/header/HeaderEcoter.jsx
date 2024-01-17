import img from "../../../../assets/ecooter/e5/header/portada.png";
import imgAbs from "../../../../assets/ecooter/e5/header/abs.jpg";
import E5 from "../../../../assets/ecooter/e5/header/E5.jpg";
import s from "./Header.module.css";
import MotosInfo from "../motoInfo/Motosinfo";
import pdf from "../../../../assets/ecooter/e5/E5.pdf"
import { pathImages } from "../../../../pathImages";

export default function HeaderEcooter({ isMobile }) {

  const handleDownload = () => {
    const fileName = 'E5.pdf'; // Reemplaza esto con el nombre que desees para el archivo

    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = pathImages + pdf;
    link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <div className={s.navSpace}></div>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={isMobile ? pathImages + E5 : pathImages + img} alt="portada" />
          {/* <img src={isMobile ? imgMobile : img} alt="portada" /> */}
        </div>
        <div className={s.absolute}>
          <div onClick={() => handleDownload()} className={s.descargarFicha}>
            <span>DESCARGAR FICHA</span>
          </div>
          <div className={s.info}>
            <div className={s.textCont}>
              <span className={s.number}>8000</span>
              <span className={s.texto}>WHATTS DE POTENCIA</span>
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
            <div onClick={() => handleDownload()} className={s.titulo}>
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
          <img src={pathImages + imgAbs} alt="abs" />
        </div>
      </div>
      <MotosInfo isMobile={isMobile} />
    </>
  );
}

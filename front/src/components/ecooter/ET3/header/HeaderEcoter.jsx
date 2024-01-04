import imgAbs from "../../../../assets/ecooter/et3/ESCRITORIO/Enmascarar grupo 448.jpg";
import ET3 from "../../../../assets/ecooter/et3/ESCRITORIO/portada et3.jpg";
import ET3MOBILE from "../../../../assets/ecooter/et3/MOBILE/MOBILE PORTADA.jpg";
import E5 from "../../../../assets/ecooter/et3/ESCRITORIO/portada et3.jpg";
import s from "./Header.module.css";
import MotosInfo from "../motoInfo/Motosinfo";
import pdf from "../../../../assets/ecooter/et3/ET3.pdf"
import { pathImages } from "../../../../pathImages";

export default function HeaderEcooterE3({ isMobile }) {

  const handleDownload = () => {
    const fileName = 'ET3.pdf'; // Reemplaza esto con el nombre que desees para el archivo

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
          {/* <img src={E5} alt="portada" /> */}
          <div className={s.filtroIzq}></div>
          <div className={s.filtroDer}></div>
          <img src={isMobile ? pathImages + ET3MOBILE : pathImages + ET3} alt="portada" />
        </div>
        <div className={s.absolute}>
          <div onClick={() => handleDownload()} className={s.descargarFicha}>
            <span>DESCARGAR FICHA</span>
          </div>
          <div className={s.info}>
            <div className={s.textCont}>
              <span className={s.number}>2000</span>
              <span className={s.texto}>WHATTS DE POTENCIA</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>70</span>
              <span className={s.texto}>km de autonomía</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>45</span>
              <span className={s.texto}>km/h</span>
            </div>
          </div>
          <div className={s.titContainer}>
            <div onClick={() => handleDownload()} className={s.titulo}>
              <p>ET3</p>
              <span>DESCARGAR FICHA</span>
            </div>
            <p className={s.ltres}>L1</p>
          </div>
        </div>
        <div className={s.filtro}></div>
      </div>
      <div className={s.sectionTwo}>
        <div className={s.imgContainer}>
          <img src={pathImages + imgAbs} alt="abs" />
          <div className={s.cbsAbsolute}>
            <h3>lleno de movimiento y conducción fresca</h3>
            <span>Diseño avanzado y espléndido, configuración especial, aspecto agradable y atractivo, lo hace más distintivo</span>
          </div>
        </div>
      </div>
      <MotosInfo isMobile={isMobile} />
    </>
  );
}

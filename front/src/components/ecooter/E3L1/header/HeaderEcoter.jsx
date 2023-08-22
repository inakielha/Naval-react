import imgAbs from "../../../../assets/ecooter/e3/cbs.svg";
import E5 from "../../../../assets/ecooter/e3l1/portada e3 l1.jpg";
import s from "./Header.module.css";
import MotosInfo from "../motoInfo/Motosinfo";
import pdf from "../../../../assets/ecooter/e3l1/E3-.pdf"

export default function HeaderEcooterE3({ isMobile }) {

  const handleDownload = () => {
    const fileUrl = '../../../../assets/ecooter/E5.pdf'; // Reemplaza esto con la URL real del PDF
    const fileName = 'E3.pdf'; // Reemplaza esto con el nombre que desees para el archivo

    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = pdf;
    link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <div className={s.navSpace}></div>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={isMobile ? E5 : E5} alt="portada" />
          <div className={s.filtroIzq}></div>
          <div className={s.filtroDer}></div>
          {/* <img src={isMobile ? imgMobile : img} alt="portada" /> */}
        </div>
        <div className={s.absolute}>
          <div onClick={()=> handleDownload()} className={s.descargarFicha}>
            <span>DESCARGAR FICHA</span>
          </div>
          <div className={s.info}>
            <div className={s.textCont}>
              <span className={s.number}>4000</span>
              <span className={s.texto}>WHATTS DE POTENCIA</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>90</span>
              <span className={s.texto}>km de autonomía</span>
            </div>
            <div className={s.textCont}>
              <span className={s.number}>75</span>
              <span className={s.texto}>km/h</span>
            </div>
          </div>
          <div className={s.titContainer}>
            <div onClick={()=> handleDownload()} className={s.titulo}>
              <p>E3</p>
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
          <div className={s.cbsAbsolute}>
            <h3>Sistema de frenos combinados de disco cbs delantero y trasero</h3>
            <span>Freno de disco hidráulico delantero y trasero adoptado, bomba superior de empuje directo/manguera de freno.
combinando científicamente la mejor fuerza de frenado, los frenos son más sensibles y seguros</span>
          </div>
        </div>
      </div>
      <MotosInfo isMobile={isMobile} />
    </>
  );
}

import s from "./Mandos.module.css";
import imgPanel from "../../../../assets/ecooter/e3/mandos/sistema de frenada.jpg";
import imgPanelMobile from "../../../../assets/ecooter/e3/mandos/Enmascarar grupo 532.jpg";
import imgLlave from "../../../../assets/ecooter/e3/mandos/arranque sin llave.jpg";
// import imgLlave from "../../../../assets/ecooter/Arranque sin llave.jpg";
import imgDisplay from "../../../../assets/ecooter/e3/mandos/tablero.jpg";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import videoSrc from "../../../../assets/ecooter/e3/mandos/Ecooter E3.mp4"
export default function Mandos({isMobile}) {
  return (
    <>
       <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={imgDisplay} alt="s" />
        </div>
        <div className={s.llave}>
          <h3>DISPLAY DIGITAL </h3>
          <span>Pantalla TFT de 6,8″ con una resolución y colores increíbles en la versión E3 PRO y pantalla LCD a color en la versión E3. </span>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.imgContainertwo}>
          <img src={isMobile ? imgPanelMobile : imgPanel} alt="panel" />
          <div className={s.absolute}>
            <div className={s.textContainer}>
            <h3>SISTEMA DE FRENADA COMBINADA</h3>
            <span>Frenos de disco hidráulico delantero y trasero que combinan electrónicamente la fuerza más adecuada para una frenada más precisa y segura. </span>
            </div>
          </div>
        </div>
      </div>
     
      <div className={s.section}>
        <div className={s.videoContainer}>
          <VideoPlayer video={videoSrc}/>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={imgLlave} alt="s" />
        </div>
        <div className={s.llave}>
          <h3>Arranque sin llave</h3>
          <span>Ponte en marcha sin sacar la llave del bolsillo.</span>
        </div>
      </div>
      
    </>
  );
}

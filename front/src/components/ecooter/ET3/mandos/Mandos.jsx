import s from "./Mandos.module.css";
import imgPanel from "../../../../assets/ecooter/e3/mandos/sistema de frenada.jpg";
import imgPanelMobile from "../../../../assets/ecooter/e3/mandos/Enmascarar grupo 532.jpg";
import imgLlave from "../../../../assets/ecooter/et3/ESCRITORIO/mandos/Enmascarar grupo 449.jpg";
// import imgLlave from "../../../../assets/ecooter/Arranque sin llave.jpg";
import imgDisplay from "../../../../assets/ecooter/et3/ESCRITORIO/mandos/tablero escritorio.gif";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import videoSrc from "../../../../assets/ecooter/et3/ESCRITORIO/mandos/x2mate.com-Ecooter ET3.mp4"
import { pathImages } from "../../../../pathImages";
export default function Mandos({ isMobile }) {
  return (
    <>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={pathImages + imgDisplay} alt="s" />
        </div>
        <div className={s.llave}>
          <h3>pantalla flotante</h3>
          <span>El panel de control tipo flotante está lleno de alta tecnología, fácil de usar.</span>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.videoContainer}>
          <VideoPlayer video={pathImages + videoSrc} />
        </div>
      </div>
      <div className={s.sectionControl}>
        <div className={s.control}>
          <h3>CONTROL TOTAL</h3>
          <span>
            Control de marcha retro iluminado.
          </span>
        </div>
        <div className={s.imgContainerControl}>
          <img src={pathImages + imgLlave} alt="s" />
        </div>
      </div>

    </>
  );
}

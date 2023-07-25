import s from "./Mandos.module.css";
import img from "../../../../assets/ecooter/Enmascarar grupo 454.jpg";
import imgPanel from "../../../../assets/ecooter/panel.jpg";
import imgControl from "../../../../assets/ecooter/CONTROL TOTAL.jpg";
import imgMobil from "../../../../assets/ecooter/app.jpg";
import imgLlave from "../../../../assets/ecooter/Arranque sin llave.jpg";
import video from "../../../../assets/ecooter/video.mp4";
export default function Mandos() {
  return (
    <>
      <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={img} alt="s" />
        </div>
        <div className={s.info}>
          <h3>mandos retroiluminadas</h3>
          <div className={s.divCol}>
            <div>
              <p>Panel IPS de 6,8 pulgadas</p>
              <p>Información meteorológica.</p>
              <p>Presión y temperatura de neumáticos.</p>
            </div>
            <div>
              <p>Autonomía.</p>
              <p>Display configurable. </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.imgContainertwo}>
          <img src={imgPanel} alt="panel" />
        </div>
      </div>
      <div className={s.sectionControl}>
        <div className={s.control}>
          <h3>CONTROL TOTAL</h3>
          <span>
            Navega por todas las pantallas del display con el pomo selector.
          </span>
        </div>
        <div className={s.imgContainerControl}>
          <img src={imgControl} alt="s" />
        </div>
      </div>
      <div className={s.section}>
        <div className={s.videoContainer}>
          <video
            controls
            src={video}
            alt="red"
            autoPlay="autoplay"
            loop="loop"
          />
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

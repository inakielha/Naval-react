import s from "./ImagenMobile.module.css";
import imgMobil from "../../../../assets/ecooter/e3/mandos/Enmascarar grupo 501.jpg";
import { BsLightbulb, BsSpeedometer2, BsPower, BsFillLockFill } from "react-icons/bs";
import { MdFlashAuto } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { GiWeight, GiFlatTire, GiBattery75, GiBreakingChain, GiCompactDisc, GiCrackedDisc } from "react-icons/gi";
import { PiEngineLight, PiMonitorLight } from "react-icons/pi";
import { FaStumbleupon } from "react-icons/fa";
import { useSelector } from "react-redux";
import VideoPlayer from "../mandos/videoPlayer/VideoPlayer";
import videoSrc from "../../../../assets/ecooter/e3/mandos/Detalles Ecooter E3.mp4"
import { pathImages } from "../../../../pathImages";
export default function ImagenMobile() {
  const Color = useSelector((state) => state.clientReducer.backgroundColor)

  // const closeDialog = (e)=>{
  //   if (e.target.id === "close"){
  //     setImagen({ok: false, src:""})
  //     dispatch(BLACK_BACKGROUND("neutral"))
  //   }
  // }
  return (
    <>
      {/* <div className={s.section}>
        <div className={s.imgContainer}>
          <img src={imgMobil} alt="portada" />
        </div>
        <div className={s.absolute}>
          <div>
            <h3>aplicación movíl</h3>
          </div>
          <div className={s.info}>
            <div className={s.colLeft}>
              <span>consumo de batería</span>
              <span>estado de la batería</span>
              <span>red 4g</span>
            </div>
            <div className={s.colRight}>
              <span>actualizaciones </span>
              <span>historial de recorridos</span>
              <span>estado de carga</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className={s.caracter} >
        {Color === "black" && <div id="close" className={s.filtro}></div>}
        <h3>caracterísitcas</h3>
        <div className={s.grid}>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <BsLightbulb size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>ILUMINACIÓN</p>
                <span>Full LED</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <BsSpeedometer2 size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>VELOCIDAD MÁX</p>
                <span>45 Km/H</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <MdFlashAuto size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>AUTONOMÍA HOMOLOGADA</p>
                <span>100Km</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <RxDimensions size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>DIMENSIONES</p>
                <span>1.950 x 710 x 1.100 mm</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <BsPower size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>ENCENDIDO</p>
                <span>Electrico</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <BsFillLockFill size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>ANTIRROBO</p>
                <span>Alarma con sensor activo de movimiento</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <GiFlatTire size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>NEUMÁTICOS</p>
                <span>Del: 110/80 - 14" Tras: 130/70 - 13"</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <AiOutlineColumnHeight size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>altura ASIENTO</p>
                <span>740 mm</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <GiWeight size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>PESO SIN BATERIA</p>
                <span>92 Kg</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <PiEngineLight size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>MOTOR</p>
                <span>Central</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <GiBattery75 size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>BATERIA</p>
                <span>(x2) LG - Litio 64 V / 45 Amp</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <GiCrackedDisc size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>FRENOS</p>
                <span>
                  Sistema CBS
                  en las dos ruedas 
                </span>
              </div>
            </div>

          </div>

          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                {/* <PiMonitorLight size={"2em"} /> */}
              </div>
              <div className={s.infoCont}>
                {/* <p>DISPLAY</p>
              <span>Digital TFT</span> */}
              </div>
            </div>
          </div>


          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <PiMonitorLight size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>DISPLAY</p>
                <span>Digital TFT</span>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.columnAlign}>

              <div className={s.imgCont}>
                <GiCompactDisc size={"2em"} />
              </div>
              <div className={s.infoCont}>
                <p>TRANSMISIÓN</p>
                <span>Cadena</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.sectionVideo}>
        <div className={s.videoContainer}>
          <h3>detalles</h3>
          <VideoPlayer video={pathImages+videoSrc} />
        </div>
      </div>
    </>
  );
}

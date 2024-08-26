import whatsapp from "../../../assets/mercury/whatsapp.svg"
import linkedin from "../../../assets/mercury/linkedin.png"
import instagram from "../../../assets/mercury/instagram.png"
import dollar from "../../../assets/mercury/dollar.png"
import youtube from "../../../assets/mercury/ytIcon.svg"
import s from "./Footer.module.css"
import { BsCurrencyDollar, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs"
import { pathImages } from "../../../pathImages"

export default function Footer({ color, demo, setDemo, red, setRed }) {
  return (
    <footer id={s.contacto} onClick={()=>{
      setDemo(false)
      setRed(false)
      }}>
      {(demo || red) && <div id="close" className={s.filtro}></div>}
      <div className={s.footerContainer}>
        <div className={s.info}>
          <p className={s.text} style={color ? { color: color } : { color: "#DF0404" }}>EXPOSICIÓN, VENTAS Y SHOWROOM</p>
          <p>Av del Libertador 520, Vicente López, Buenos Aires 1638</p>
          {/* <p>info@navalmotor.com</p> */}
          <p>info@ecooter.com.ar</p>
          <div className={s.numero}>
            {/* <div className={s.wspContainer}>
              <img src={pathImages + whatsapp} alt="contact" />
            </div> */}
            {/* <span>+541126661777</span> */}
            <span>+54 9 11 7100-0090</span>
          </div>
        </div>
        <div className={s.redes}>
          <p className={s.follow}>FOLLOW US</p>
          <div className={s.redesContainer}>
            <div>
              <a
                target="_blank"
                // href={pathImages ? "https://www.instagram.com/naval_motor" : "https://www.instagram.com/ecooter_ar/"}
                href={"https://www.instagram.com/ecooter_ar/"}
              >
                <BsInstagram className={s.icon} color={"#707070"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A"
                target="_blank"
              >
                <BsYoutube className={s.icon} color={"#707070"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

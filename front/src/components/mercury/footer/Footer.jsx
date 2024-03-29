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
          <p>Av. del Libertador 701, Vicente López, Buenos Aires</p>
          <p>info@navalmotor.com</p>
          <div className={s.numero}>
            <div className={s.wspContainer}>
              <img src={pathImages + whatsapp} alt="contact" />
            </div>
            <span>+541126661777</span>
          </div>
        </div>
        <div className={s.redes}>
          <p className={s.follow}>FOLLOW US</p>
          <div className={s.redesContainer}>
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/navalmotor_arg/"
              >
                <BsInstagram size={"2.5em"} color={"#707070"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A"
                target="_blank"
              >
                <BsYoutube size={"2.5em"} color={"#707070"} />
              </a>
            </div>
            {/* <div>
              <a
                href="https://www.ambito.com/contenidos/mercados.html"
                target="_blank"
              >
                <BsCurrencyDollar size={"2.5em"} color={"#707070"}/>
              </a>
            </div> */}
            {/* <div>
              <a
                href="https://www.linkedin.com/company/naval-motor/mycompany/"
                target="_blank"
              >
                <BsLinkedin size={"2.5em"} color={"#707070"}/>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

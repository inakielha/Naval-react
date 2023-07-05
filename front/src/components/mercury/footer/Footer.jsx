import whatsapp from "../../../assets/whatsapp.svg"
import linkedin from "../../../assets/linkedin.png"
import instagram from "../../../assets/instagram.png"
import dollar from "../../../assets/dollar.png"
import youtube from "../../../assets/ytIcon.svg"
import s from "./Footer.module.css"

export default function Footer() {
  return (
    <footer id={s.contacto}>
      <div className={s.footerContainer}>
        <div className={s.info}>
          <p className={s.text}>EXPOSICIÓN, VENTAS Y SHOWROOM</p>
          <p>Av. del Libertador 701, Vicente López, Buenos Aires</p>
          <p>info@navalmotor.com</p>
          <div className={s.numero}>
            <div className={s.wspContainer}>
              <img src={whatsapp} alt="contact" />
            </div>
            <span>+541126661777</span>
          </div>
        </div>
        <div className={s.redes}>
          <p className={s.text}>FOLLOW US</p>
          <div className={s.redesContainer}>
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/navalmotor_arg/"
              >
                <img src={instagram} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A"
                target="_blank"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.ambito.com/contenidos/mercados.html"
                target="_blank"
              >
                <img src={dollar} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/naval-motor/mycompany/"
                target="_blank"
              >
                <img src= {linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

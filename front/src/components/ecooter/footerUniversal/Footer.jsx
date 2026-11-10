import { pathImages } from "../../../pathImages";
import s from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={s.footerCont}>
      <footer className={s.footer}>
        <div className={s.footer_content}>
          <h6>EXPOSICION, VENTAS, Y SHOWROOM</h6>
          <p>Av del Libertador 520, Vicente López, Buenos Aires 1638</p>
          <p>info@ecooter.com.ar</p>
          <div className={s.whatsapp}>
            {/* <img src={pathImages + "/wpp_icon.svg"} alt="" /> */}
            <p>+54 9 11 7100-0090</p>
          </div>
        </div>

        <h6 className={s.followUs}>FOLLOW US</h6>
        <div className={s.footer_social}>
          <img onClick={(e) => window.open("https://www.instagram.com/ecooter_ar/", '_blank')} src={"https://navalmotor.com/mediaserver/web/generac/react/instagram_icon.svg"} alt="instagram" />
          <img onClick={(e) => window.open("https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A", '_blank')} src={"https://navalmotor.com/mediaserver/web/generac/react/youtube_icon.svg"} alt="youtube" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import s from "./NavbarEcooter.module.css";
import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import logo from "../../../assets/mercury/logo-naval.png";
import ecooterLogo from "../../../assets/ecooter/e5/ECOOTER_LOGO_black.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY } from "../../../redux/actions/actions";
import Hamburger from "./NavbarMobile/hamburger/Hamburger";
import { useNavigate } from "react-router-dom";

export default function NavbarEcooter({ isMobile, landing }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [category, setCategory] = useState("repuestos y accesorios");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const navigateLanding = (e) => {
    navigate("/")
  };

  return (
    <>
      <nav className={s.navbar}>
        <div className={s.navContainer}>
          <div className={s.flex}>
            <div className={s.alignMenu}>
              <LuMenu size={"3em"} onClick={() => setMobileMenu(true)} />
            </div>
            <div className={s.imgContainer}>
              <img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={logo} alt="logo" />
            </div>
            <div className={s.iconContainer}>
              {/* <IoSearchCircleSharp
                style={{  color: "#000000", cursor: "pointer" }}
              /> */}
              {/* <RxDividerVertical style={{ color: "#000000" }} /> */}
              <IoLogoWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?phone=5491126661777&", '_blank')}
                style={{ color: "#25d366", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={s.categorias}>
            <div className={s.mercuryContainer}>
              <img src={ecooterLogo} alt="" />
            </div>
            <div className={s.spanCont}>

              <span
                onClick={(e) => navigateLanding(e)}
                style={
                  landing
                    ? {
                      color: "#6EC1E4",
                    }
                    : {}
                }
              >
                Modelos
              </span>
              <span
                onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')}
                style={
                  category === "contacto"
                    ? {
                      color: "#6EC1E4",
                    }
                    : {}
                }
              >
                CONTACTO
              </span>

            </div>
          </div>
          <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
        </div>
      </nav>
      {/* ); */}
    </>
  );
}


import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import logo from "../../../assets/mercury/logo-naval.png";

import ecooterLogo from "../../../assets/ecooter/e5/ECOOTER_LOGO_black.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";



import style from "./NavbarEcooter.module.css";
import Sidebar from "./sidebarUniversal/Sidebar";
import { pathImages } from "../../../pathImages";

export default function Navbar({ setMobileMenu, mobileMenu, setDemo, demo, red, setRed }) {
  const [scroll, setScroll] = useState(false)
  const [category, setCategory] = useState("motores")
  // const [mobileMenu, setMobileMenu] = useState("hide")

  const navigate = useNavigate()
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3.2,
    autoplay: true,
    slidesToScroll: 1,
  };


  const navigateLanding = (e) => {
    setDemo(false)
    setRed(false)
    if (pathImages) {
      navigate("/ecooter/")
    } else {
      navigate("/")
    }
  };

  const navigateConcesionarios = (e) => {
    setDemo(false)
    setRed(false)
    if (pathImages) {
      navigate("/ecooter/concesionarios")
    } else {
      navigate("/concesionarios")
    }
  };

  const handleCategory = (e) => {
    let value = e.target.id
    setCategory(value)
  }

  const openWhatsApp = () => {
    const url = "https://api.whatsapp.com/send?phone=5491171000090&";
    const windowFeatures = "width=400,height=600"; // Establece las dimensiones de la ventana

    window.open(url, '_blank', windowFeatures);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else setScroll(false)
    })
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {/* {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>} */}

      <nav className={(scroll && mobileMenu !== "show") || demo || red ? style.navbar : style.navbarNoScroll} >
        {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}
        {pathImages != "" &&
          <div className={style.container} style={(scroll && mobileMenu !== "show") || demo || red ? { display: "none" } : {}}>
            <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
              <LuMenu onClick={() => setMobileMenu("show")} />
            </IconContext.Provider>
            {mobileMenu === "show" &&
              // <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
              <Sidebar open={mobileMenu} close={setMobileMenu} />
            }
            <div className={style.imgContainer} onClick={() => window.location.href = "https://www.navalmotor.com/"}>
              <img src={pathImages + logo} alt="logo" />
            </div>
            <div>

              <IoLogoWhatsapp color="#25D366" className={style.iconWsp} onClick={() => openWhatsApp()} />
            </div>
          </div>
        }
        <div className={style.navWeb}>
          <div className={style.mercuryLogo}><img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={pathImages + ecooterLogo} alt="logoMercury" /></div>
          <div className={style.secciones}>
            <span style={category === "modelos" ? { color: "#6ec1e4" } : {}} onClick={(e) => {
              navigateLanding(e)
              handleCategory(e)
            }} id={"modelos"}>MODELOS</span>

            <span style={category === "demo" ? { color: "#6ec1e4" } : {}} onClick={(e) => {
              setRed(false)
              setDemo((prev) => !prev)
              handleCategory(e)
            }} id={"demo"}>DEMO</span>

            <span style={category === "sumate a la red" ? { color: "#6ec1e4" } : {}} onClick={(e) => {
              setDemo(false)
              setRed((prev) => !prev)
              handleCategory(e)
            }} id={"sumate a la red"}>SUMATE A LA RED</span>

            <span style={category === "concesionarios" ? { color: "#6ec1e4" } : {}} onClick={(e) => {
              navigateConcesionarios(e)
              handleCategory(e)
            }} id={"concesionarios"}>CONCESIONARIOS</span>
            {pathImages == "" ? 
            <span style={category === "contacto" ? { color: "#6ec1e4" } : {}} onClick={(e) => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })} id={"contacto"}>Contacto</span>
            :
            <span style={category === "contacto" ? { color: "#6ec1e4" } : {}} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')} id={"contacto"}>Contacto</span>
          }
          </div>
        </div>
        <div className={style.navMobile} >
          <div className={style.mercuryContainer}>
//               <img src={pathImages + ecooterLogo} alt="" />
//             </div>
          <div className={style.sliderContainer}>
            <Slider className={style.slider}  {...settings}>
              <div className={style.fondoText}><div style={category === "motores" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"motores"} onClick={(e) => handleCategory(e)}>Motores</div></div>
              <div className={style.fondoText}><div style={category === "propulsion" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"propulsion"} onClick={(e) => handleCategory(e)}>Sist. Integral de Propulsión</div></div>
              <div className={style.fondoText}><div style={category === "repuestos" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"repuestos"} onClick={(e) => handleCategory(e)}>Repuestos y
                Accesorios</div></div>
              <div className={style.fondoText}><div style={category === "concesionarios" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"concesionarios"} onClick={(e) => navigateConcesionarios(e)}>Concesionarios y
                Servicios</div></div>


              {pathImages == "" ?
                <div className={style.fondoText}><div style={category === "contacto" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"contacto"} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')}>Contacto</div>  </div>
                :
                <div className={style.fondoText}><div style={category === "contacto" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"contacto"} onClick={(e) => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>Contacto</div></div>
              }
            </Slider>
          </div>
        </div >
      </nav >
      <div className={scroll || demo || red ? style.espacioScroll : style.espacio} ></div>
    </div >
  );
}




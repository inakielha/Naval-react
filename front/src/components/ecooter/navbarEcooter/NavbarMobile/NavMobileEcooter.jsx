import { LuMenu } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import style from "./Navbar.module.css";
import logo from "../../../../assets/mercury/logo-naval.png"
import j from "../../../mercury/header/header.module.css";
import s from "./Navbar.module.css";
import { HiOutlineArrowSmallLeft, HiOutlineArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import ecooterLogo from "../../../../assets/ecooter/e5/blanco Logo Ecooter.png";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger/Hamburger";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { pathImages } from "../../../../pathImages";
import Sidebar from "../sidebarUniversal/Sidebar";



export default function NavMobileEcooter({ isMobile, landing, setDemo, demo, red, setRed }) {
  const [mobileMenu, setMobileMenu] = useState("hide")
  const [category, setCategory] = useState("modelos");
  const [scroll, setScroll] = useState(false)

  const navigate = useNavigate()

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const navigateLanding = (e) => {
    setDemo(false)
    setRed(false)
    if (pathImages == "") {
      navigate("/")
    } else {
      navigate("/ecooter/")
    }
  };

  const handleScroll = () => {
    // Desplaza la ventana 100 píxeles hacia abajo
    window.scrollBy({
      top: 100, // Puedes ajustar este valor según tus necesidades
      left: 0,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else setScroll(false)
    })
  }, [])
  console.log("path",pathImages, pathImages != "")
  return (
    <div className={style.nabMobile}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}
      {pathImages != "" &&
        <nav className={style.navbar} style={(scroll || demo || red) ? { display: "none" } : {}}>
          <div className={style.container}>
            <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
              <LuMenu onClick={() => setMobileMenu("show")} />
            </IconContext.Provider>
            <div className={style.imgContainer}>
              <img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={pathImages + logo} alt="logo" />
            </div>
            <div>
              <div className={style.contenedorLupa}>
                {/* <IconContext.Provider value={{ className: style.iconLupa, size: "1.5em" }}>
                <BiSearch />
              </IconContext.Provider> */}
                <IoLogoWhatsapp size={"2.4em"} onClick={() => window.open("https://api.whatsapp.com/send?phone=1164344440&", '_blank')}
                  style={{ color: "#25d366", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          {/* <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} /> */}
          <Sidebar open={mobileMenu} close={setMobileMenu} />
        </nav>
      }
      {/* <div className={j.section} style={(red ? { display: "none" } : (scroll || demo) ? { margin: "0" }  : { marginBottom: "0" })}> */}
      <div className={j.section} style={(scroll || demo || red) ? { margin: "0" } : { marginBottom: "0" }}>
        <div className={j.contenedor}>
          <div onClick={() => window.location.href = "https://www.navalmotor.com/"} className={j.back}>
            <IconContext.Provider value={{ className: j.icon, size: "1em" }}>
              <HiChevronLeft />
            </IconContext.Provider>

            <span>Home</span>
          </div>
          <div className={j.imgContainer}><img src={pathImages + ecooterLogo} alt="logo" /></div>
          <span>ss</span>
        </div>
      </div>
      <div className={s.btnContainer}>
        <button onClick={() => {
          navigateLanding()
        }
        }
          style={
            landing && !demo && !red
              ? {
                color: "white",
                backgroundColor: "#000000"
              }
              : {}
          }>Modelos</button>

        <button onClick={(e) => {

          setDemo((prev) => !prev)
          setRed(false)
          handleScroll()

        }
        } style={
          demo
            ? {
              color: "white",
              backgroundColor: "#000000"
            }
            : {}
        }>Demo</button>


        <button onClick={(e) => {
          setRed((prev) => !prev)
          setDemo(false)
          handleScroll()
        }}
          style={red ? { color: "white", backgroundColor: "#000000" } : {}}>Sumate a la red</button>


        <button onClick={() => { pathImages == "" ? navigate("/concesionarios/") : navigate("/ecooter/concesionarios") }} style={window.location.href.includes("concesionario") ? { color: "white", backgroundColor: "#000000" } : {}}>Concesionarios</button>

        {
          pathImages == "" ? <button onClick={(e) => scrollToBottom()} style={category === "contacto" ? { color: "white", backgroundColor: "#000000" } : {}}>Contacto</button>
            : <button onClick={(e) => window.open("https://www.navalmotor.com/contacto")} style={category === "contacto" ? { color: "white", backgroundColor: "#000000" } : {}}>Contacto</button>
        }

      </div>
    </div>
  )
}
import { LuMenu } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import style from "./Navbar.module.css";
import logo from "../../../../assets/logo-naval.png"
import j from "../../../mercury/header/header.module.css";
import s from "./Navbar.module.css";
import { HiOutlineArrowSmallLeft, HiOutlineArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import ecooterLogo from "../../../../assets/ecooter/blanco Logo Ecooter.png";
import { useDispatch } from "react-redux";
import { useState } from "react";



export default function NavMobileEcooter() {
  const [category, setCategory] = useState("motores");
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    setCategory(category);
    // dispatch(CATEGORY(category));
  };
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.container}>
          <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
            <LuMenu />
          </IconContext.Provider>
          <div className={style.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div className={style.contenedorLupa}>
              <IconContext.Provider value={{ className: style.iconLupa, size: "1.5em" }}>
                <BiSearch />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </nav>
      <div className={j.section} style={{ marginBottom: "0"}}>
        <div className={j.contenedor}>
          <div className={j.back}>
            <IconContext.Provider value={{ className: j.icon, size: "1em" }}>
              <HiChevronLeft />
            </IconContext.Provider>

            <span>Home</span>
          </div>
          <div className={j.imgContainer}><img src={ecooterLogo} alt="logo" /></div>
          <span>ss</span>
        </div>
      </div>
      <div className={s.btnContainer}>
        <button onClick={(e) => handleCategory(e) } style={
                category === "motores"
                  ? {
                    color: "white",
                    backgroundColor: "#000000"
                  }
                  : {}
              }>Motores</button>
        <button onClick={(e) => handleCategory(e) } style={
                category === "contacto"
                  ? {
                    color: "white",
                    backgroundColor: "#000000"
                  }
                  : {}
              }>Contacto</button>
      </div>
    </>
  )
}
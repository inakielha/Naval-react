import s from "./NavbarWeb.module.css";
import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import logo from "../../../assets/mercury/logo-naval.png";
import ws from "../../../assets/mercury/whatsapp.svg";
import mercury from "../../../assets/mercury/Logos Mercury negro.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY } from "../../../redux/actions/actions";

export default function NavbarWeb() {
  const [category, setCategory] = useState("repuestos y accesorios");
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    let category = e.target.innerText.toLowerCase()

    setCategory(category);
    dispatch(CATEGORY(category));
  };

  return (
    <nav className={s.navbar}>
      <div className={s.navContainer}>
        <div className={s.flex}>
          <LuMenu size={"3em"} />
          <div className={s.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.iconContainer}>
            <IoSearchCircleSharp
              style={{ width: "100%", height: "100%", color: "#000000" }}
            />
            <RxDividerVertical style={{ width: "100%", color: "#000000" }} />
            <IoLogoWhatsapp
              style={{ width: "100%", height: "100%", color: "#25d366" }}
            />
          </div>
        </div>
        <div className={s.categorias}>
          <div className={s.mercuryContainer}>
            <img src={mercury} alt="" />
          </div>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "motores"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Motores
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "sist. integral de propulsión"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Sist. Integral de Propulsión
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "repuestos y accesorios"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Repuestos y Accesorios
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "concesionarios y servicios"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Concesionarios y Servicios
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "contacto"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            CONTACTO
          </span>
        </div>
        {/* <div></div> */}
      </div>
    </nav>
  );
}

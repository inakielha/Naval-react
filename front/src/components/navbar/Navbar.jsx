import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import style from "./Navbar.module.css";
import logo from "../../assets/mercury/logo-naval.png"

export default function Navbar() {
  return (
    <nav className= {style.navbar}>
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
  );
}

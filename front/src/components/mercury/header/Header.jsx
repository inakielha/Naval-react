import s from "./header.module.css";
import { HiOutlineArrowSmallLeft, HiOutlineArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
// import logo from "../../../assets/mercury.svg"
import logo from "../../../assets/logo-naval.png"

export default function Header() {
  return (
    <div className={s.section}>
      <div className={s.contenedor}>
        <div className={s.back}>
          <IconContext.Provider value={{ className: s.icon, size: "1em" }}>
            <HiChevronLeft />
          </IconContext.Provider>

          <span>Home</span>
        </div>
        <div className={s.imgContainer}><img src={logo} alt="logo" /></div>
        <div>ss</div>
      </div>
    </div>
  );
}

import s from "./Hamburguer.module.css"
import cross from "../../../../../assets/ecooter/cross.svg"
import navalMenu from "../../../../../assets/ecooter/navalMenu.svg"
import slogan from "../../../../../assets/ecooter/slogan.svg"
import { IoIosSearch, IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import BasicAccordion from "./accordion/Acordion";
import Sidebar from "./sideBar/Sidebar";
import MenuMobile from "./menuMobile/MenuMobile";
import { useSelector } from "react-redux";


export default function Hamburger({setMobileMenu, show}) {
    const isMobile = useSelector((state)=> state.clientReducer.isMobile)
    console.log(isMobile)
    return (
        <>
            {isMobile ? 
            <MenuMobile setMobileMenu={setMobileMenu} show={show}/>
            : 
            <Sidebar open={show} close={setMobileMenu}/>
        }
        </>
    )
}
// export default function Hamburger({setMobileMenu, show}) {
//     return (
//         <>
//             <ul className={s.nav_mobile + " "+ s[show]}>
//                 <li className={s.closeLogos}>
//                     <div className={s.closeContainer}>
//                         <img onClick={()=>setMobileMenu("hide")} src={cross} alt="cross"/>
//                     </div>
//                     <div onClick={() => window.location.href = "https://www.navalmotor.com/"} className={s.containerLogos}>
//                         <div className={s.logoMenu}><img src={navalMenu} alt="logo"/></div>
//                         <div className={s.submark}><img src={slogan} alt="slogan"/></div>
//                     </div>
//                 </li>
//                 <li>
//                     {/* <select> */}
//                     {/* <a onClick={()=>window.location.href = "https://www.navalmotor.com/#propulsion"} data-after="Novedades">PROPULSIÓN FUERA DE BORDA</a> */}
//                     <BasicAccordion titulo={"PROPULSIÓN FUERA DE BORDA"} arrlink={[{text: "VOLVO PENTA",url: "https://www.navalmotor.com/volvo-penta-propulsion"},{text: "MITSUBISHI",url: "https://www.navalmotor.com/mitsubishi"}]}/>
//                     {/* </select> */}
//                      </li>
//                 {/* <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#interna"} data-after="Club">PROPULSIÓN interna</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#movilidad"} data-after="Garantia">movilidad</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#embarcaciones"} data-after="Soluciones">embarcaciones</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#generacion"} data-after="Nosotros" href="#novedades">novedades</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#novedades"} data-after="Contacto" href="#yates">club yates </a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#solucionesMobile"} data-after="Contacto" href="#soluciones">soluciones</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#garantias"} data-after="Contacto" href="#garantia">garantia</a>
//                     </select>
//                     </li>
//                 <li>
//                     <select>
//                     <a onClick={()=>window.location.href = "https://www.navalmotor.com/#contacto"} data-after="Contacto" href="#contacto">contacto</a>
//                     </select>
//                     </li> */}
            
//             </ul>
//         </>
//     )
// }
import s from "./Hamburguer.module.css"
import cross from "../../../../../assets/ecooter/cross.svg"
import navalMenu from "../../../../../assets/ecooter/navalMenu.svg"
import slogan from "../../../../../assets/ecooter/slogan.svg"


export default function Hamburger({setMobileMenu, show}) {
    return (
        <>
            <ul className={s.nav_mobile + " "+ s[show]}>
                <li className={s.closeLogos}>
                    <div className={s.closeContainer}>
                        <img onClick={()=>setMobileMenu("hide")} src={cross} alt="cross"/>
                    </div>
                    <div onClick={() => window.location.href = "https://www.navalmotor.com/"} className={s.containerLogos}>
                        <div className={s.logoMenu}><img src={navalMenu} alt="logo"/></div>
                        <div className={s.submark}><img src={slogan} alt="slogan"/></div>
                    </div>
                </li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#propulsion"} data-after="Novedades">PROPULSIÓN FUERA DE BORDA</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#interna"} data-after="Club">PROPULSIÓN interna</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#movilidad"} data-after="Garantia">movilidad</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#embarcaciones"} data-after="Soluciones">embarcaciones</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#generacion"} data-after="Nosotros" href="#novedades">novedades</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#novedades"} data-after="Contacto" href="#yates">club yates </a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#solucionesMobile"} data-after="Contacto" href="#soluciones">soluciones</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#garantias"} data-after="Contacto" href="#garantia">garantia</a></li>
                <li><a onClick={()=>window.location.href = "https://www.navalmotor.com/#contacto"} data-after="Contacto" href="#contacto">contacto</a></li>
            </ul>
        </>
    )
}
import { useSelector } from "react-redux"
import Colores from "./coloresCarrusel/Colores"
import Galeria from "./galeriaImagenes/Galeria"
import HeaderEcooterE3 from "./header/HeaderEcoter"
import ImagenMobile from "./imagenMobile/ImagenMobile"
import Mandos from "./mandos/Mandos"
import s from "../landingEcooter/Landing.module.css"

export default function Ecooter ({isMobile, demo, setDemo}) {    
    return (
        <div style={{position:"relative"}}>
            {demo && <div onClick={()=>setDemo(false)} id="close" className={s.filtro}></div>}

            <HeaderEcooterE3 isMobile={isMobile}/>
            <Mandos isMobile={isMobile}/>
            <ImagenMobile/>
            <Galeria/>
            <Colores/>
        </div>
    )
}
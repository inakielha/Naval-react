import { useSelector } from "react-redux"
import Colores from "./coloresCarrusel/Colores"
import Galeria from "./galeriaImagenes/Galeria"
import HeaderEcooter from "./header/HeaderEcoter"
import ImagenMobile from "./imagenMobile/ImagenMobile"
import Mandos from "./mandos/Mandos"
import s from "../landingEcooter/Landing.module.css"


export default function Ecooter({ isMobile, demo, setDemo }) {
    return (
        <div style={{position:"relative"}}>
            {demo && <div onClick={() => setDemo(false)} id="close" className={s.filtro}></div>}
            <HeaderEcooter isMobile={isMobile} />
            <Mandos />
            <ImagenMobile />
            <Galeria />
            <Colores />
        </div>
    )
}
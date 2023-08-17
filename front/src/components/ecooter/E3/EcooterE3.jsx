import { useSelector } from "react-redux"
import Colores from "./coloresCarrusel/Colores"
import Galeria from "./galeriaImagenes/Galeria"
import HeaderEcooterE3 from "./header/HeaderEcoter"
import ImagenMobile from "./imagenMobile/ImagenMobile"
import Mandos from "./mandos/Mandos"


export default function Ecooter ({isMobile}) {    
    return (
        <>
            <HeaderEcooterE3 isMobile={isMobile}/>
            <Mandos isMobile={isMobile}/>
            <ImagenMobile/>
            <Galeria/>
            <Colores/>
        </>
    )
}
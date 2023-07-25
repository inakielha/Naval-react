import { useSelector } from "react-redux"
import Colores from "./coloresCarrusel/Colores"
import Test from "./coloresCarrusel/test"
import Galeria from "./galeriaImagenes/Galeria"
import HeaderEcooter from "./header/HeaderEcoter"
import ImagenMobile from "./imagenMobile/ImagenMobile"
import Mandos from "./mandos/Mandos"


export default function Ecooter ({isMobile}) {    
    return (
        <>
            <HeaderEcooter isMobile={isMobile}/>
            <Mandos/>
            <ImagenMobile/>
            <Galeria/>
            <Colores/>
            {/* <Test/> */}
        </>
    )
}
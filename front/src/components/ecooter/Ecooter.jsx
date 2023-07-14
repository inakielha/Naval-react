import Colores from "./coloresCarrusel/Colores"
import Galeria from "./galeriaImagenes/Galeria"
import HeaderEcooter from "./header/HeaderEcoter"
import ImagenMobile from "./imagenMobile/ImagenMobile"
import Mandos from "./mandos/Mandos"


export default function Ecooter () {
    return (
        <>
            <HeaderEcooter/>
            <Mandos/>
            <ImagenMobile/>
            <Galeria/>
            <Colores/>
        </>
    )
}
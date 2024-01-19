import img from "../../../assets/ecooter/landing/header (1).jpg"
import motoecinco from "../../../assets/ecooter/landing/Grupo 501.jpg"
import motoetresla from "../../../assets/ecooter/landing/Grupo 502.jpg"
import ecincoli from "../../../assets/ecooter/landing/Grupo 503.jpg"
import ettres from "../../../assets/ecooter/landing/Grupo 504.jpg"
import s from "./Landing.module.css"
import { useNavigate } from "react-router-dom"
import { pathImages } from "../../../pathImages"


export default function LandingEcooter({setDemo, demo, red, setRed}) {
    const navigate = useNavigate()
    const handleRedirect = (root) => {
        if (!pathImages) {
            root = root.replace("/ecooter","")
        }
        window.scrollTo(0, 0); // Llevar la ventana al principio
        navigate(root); // Realizar la redirección
    };
    return (
        <div className={s.landing} onClick={()=>{
            setDemo(false)
            setRed(false)
            }}>
            {(demo || red) && <div id="close" className={s.filtro}></div>}
            <div className={s.navSpace}></div>
            <section className={s.header}>
                <img src={pathImages + img} alt="" />
            </section>
            <section className={s.menu}>
                <h2>ESCOGE TU MOTO ELÉCTRICA</h2>
                <div className={s.motos}>
                    <div onClick={() => handleRedirect("/ecooter/e5")} className={s.moto}>
                        <div className={s.imgContainer}><img src={pathImages + motoecinco} alt="" /></div>
                        <button onClick={() => handleRedirect("/ecooter/e5")}>E5</button>
                    </div>
                    <div onClick={() => handleRedirect("/ecooter/e3")} className={s.moto}>
                        <div className={s.imgContainer}><img src={pathImages + motoetresla} alt="" /></div>
                        <button onClick={() => handleRedirect("/ecooter/e3")}>E3 l3</button>
                    </div>
                    <div onClick={() => handleRedirect("/ecooter/e3l1")} className={s.moto}>
                        <div className={s.imgContainer}><img src={pathImages + ecincoli} alt="" /></div>
                        <button>E3 l1</button>
                    </div>
                    <div onClick={() => handleRedirect("/ecooter/et3")} className={s.moto}>
                        <div className={s.imgContainer}><img src={pathImages + ettres} alt="" /></div>
                        <button onClick={() => handleRedirect("/ecooter/et3")}>ET3</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
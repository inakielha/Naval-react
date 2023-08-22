import img from "../../../assets/ecooter/landing/header (1).jpg"
import motoecinco from "../../../assets/ecooter/landing/Grupo 501.jpg"
import motoetresla from "../../../assets/ecooter/landing/Grupo 502.jpg"
import ecincoli from "../../../assets/ecooter/landing/Grupo 503.jpg"
import ettres from "../../../assets/ecooter/landing/Grupo 504.jpg"
import s from "./Landing.module.css"
import { useNavigate } from "react-router-dom"


export default function LandingEcooter (){
    const navigate = useNavigate()
    const handleRedirect = (root) => {
        window.scrollTo(0, 0); // Llevar la ventana al principio
        navigate(root); // Realizar la redirección
      };
    return (
        <div className={s.landing}>  
            <div className={s.navSpace}></div>
            <section className={s.header}>
                <img src={img} alt="" />
            </section>
            <section className={s.menu}>
                <h2>ESCOGE TU MOTO ELÉCTRICA</h2>
                <div className={s.motos}>
                    <div onClick={()=>handleRedirect("/e5")} className={s.moto}>
                        <div className={s.imgContainer}><img src={motoecinco} alt="" /></div>
                        <button onClick={()=>handleRedirect("/e5")}>E5</button>
                    </div>
                    <div onClick={()=>handleRedirect("/e3")} className={s.moto}>
                        <div className={s.imgContainer}><img src={motoetresla} alt="" /></div>
                        <button onClick={()=>handleRedirect("/e3")}>E3 l3</button>
                    </div>
                    <div onClick={()=>handleRedirect("/e3l1")} className={s.moto}>
                        <div className={s.imgContainer}><img src={ecincoli} alt="" /></div>
                        <button>E3 l1</button>
                    </div>
                    <div onClick={()=>handleRedirect("/et3")} className={s.moto}>
                        <div className={s.imgContainer}><img src={ettres} alt="" /></div>
                        <button onClick={()=>handleRedirect("/et3")}>ET3</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
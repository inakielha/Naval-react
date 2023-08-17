import img from "../../../assets/ecooter/landing/header.svg"
import motoecinco from "../../../assets/ecooter/landing/motoe5.jpg"
import motoetresla from "../../../assets/ecooter/landing/motoe3la.jpg"
import ecincoli from "../../../assets/ecooter/landing/e5li.jpg"
import ettres from "../../../assets/ecooter/landing/et3.jpg"
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
                    <div className={s.moto}>
                        <div className={s.imgContainer}><img src={ecincoli} alt="" /></div>
                        <button>E3 l1</button>
                    </div>
                    <div className={s.moto}>
                        <div className={s.imgContainer}><img src={ettres} alt="" /></div>
                        <button>ET3</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
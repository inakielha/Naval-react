import { useSelector } from "react-redux";
import Carrusel from "./carrusel/Carrusel";
import Header from "./header/Header";
import Postal from "./tienda/postal/Postal";
import Productos from "./tienda/productos/Productos";
import Promos from "./tienda/promos/Promos";
import Tienda from "./tienda/Tienda";
import Motores from "./motores/Motores";

export default function Mercury(){
    const categorySelected = useSelector((state)=> state.clientReducer.category)
    console.log(categorySelected)
    return(
       <>
       <Header/>
       <Carrusel/>
       {/* <Tienda/> */}
       { categorySelected === "Repuestos y Accesorios" && <Tienda/> }
       { categorySelected === "Motores" && <Motores/> }
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       </>
    )
}
import s from "./Hamburguer.module.css"

import Sidebar from "./sideBar/Sidebar";
import MenuMobile from "./menuMobile/MenuMobile";
import { useSelector } from "react-redux";


export default function Hamburger({setMobileMenu, show}) {
    const isMobile = useSelector((state)=> state.clientReducer.isMobile)
    return (
        <>
            {isMobile ? 
            <MenuMobile setMobileMenu={setMobileMenu} show={show}/>
            : 
            <Sidebar open={show} close={setMobileMenu}/>
        }
        </>
    )
}
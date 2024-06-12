import React, { useState } from 'react'
import mapa from "../../../../../assets/ecooter/concesionarios/mapa/logo_ecooter.png"
import { SiGooglemaps } from "react-icons/si"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./marker.module.css"
import { pathImages } from '../../../../../pathImages'

const Marker = ({ className, lat, lng, markerId, onClick, email, telefono, direccion, nombre, ...props }) => {
    const [info, setInfo] = useState(false)
    return (
        <>
            {
                lat && lng ? (
                    <>
                        <img
                            className={className}
                            src={pathImages+mapa}
                            // src={"https://navalmotor.com/mediaserver/web/ecooter/static/media/logo_ecooter.png"}
                            lat={lat}
                            lng={lng}
                            onClick={(e) => (onClick ? onClick(e, { markerId, lat, lng }) : null)}
                            style={{ cursor: 'pointer', fontSize: 40 }}
                            alt={markerId}
                            width={35}
                            height={35}
                            onMouseEnter={() => setInfo(true)}
                            onMouseLeave={() => setInfo(false)}
                            {...props}
                        />
                        {/* {
                            info &&
                            <div className={s.marcador}>
                                <div className={s.marcadorContainer}>
                                <h3>{nombre}</h3>
                                <div className={s.flex}>
                                    <SiGooglemaps /><span>{direccion}</span>
                                </div>
                                <div className={s.flex}>
                                    <BsTelephone /><span>{telefono}</span>
                                </div>
                                <div className={s.flex}>
                                    <HiOutlineMail /><span>{email}</span>
                                </div>
                                </div>
                            </div>
                        } */}
                    </>
                ) : ""
            }
        </>
    )
}

export default Marker
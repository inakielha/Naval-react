import TextField from '@mui/material/TextField';
import s from "./demo.module.css"
import { HiChevronLeft } from "react-icons/hi";
import logoEcooter from "../../../assets/ecooter/e5/ECOOTER_LOGO_black.png"
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function Demo({ demo, setDemo }) {
    const form = useRef()
    const [button, setButton] = useState("")
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [open, setOpen] = useState("")

    const handleMotoBtn = (e) => {
        let moto = e.target.innerText;
        setButton(moto)
    }

    const handleEnviar = (e) => {
        e.preventDefault()
        console.log({
            button,
            nombre,
            direccion,
            telefono,
            email
        })

        // Configurar EmailJS
        let templateParams = {
            button,
            nombre,
            direccion,
            telefono,
            email
        };
        emailjs.send('service_rxbmigl', 'template_sly5l64', templateParams, 'xSaC_xEv6lvaUI57S')
            .then((result) => {
                console.log("LISTOOOOOOOOOO", result.text);
                setOpen(true)
            }, (error) => {
                console.log(error.text);
            });
            
            setDemo(false)
    }
    console.log(button)
    return (
        <>
            {
                demo &&

                < div className={s.section} >
                    <form ref={form} className={s.form} onSubmit={(e) => handleEnviar(e)}>

                        <div className={s.imgCont}><img src={logoEcooter} alt="" /></div>
                        <div className={s.back}>
                            <HiChevronLeft onClick={() => setDemo(false)} className={s.icon} color='#0c4c6b' />
                            <span>FORMULARIO</span>
                            <div></div>
                        </div>
                        <TextField
                            className={s.inputMaterial}
                            id="Correo Electronico"
                            label="Correo Electronico"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            className={s.inputMaterial}
                            id="Nombre Y Apellido"
                            label="Nombre Y Apellido"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                        <TextField
                            className={s.inputMaterial}
                            id="Dirección"
                            label="Dirección"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />

                        <TextField
                            className={s.inputMaterial}
                            id="Telefono"
                            label="Telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />

                        <div className={s.selectMoto}>
                            <p>Elige Tu Moto</p>
                            <div className={s.btnCont}>
                                <button type="button" style={button == "E5" ? { backgroundColor: "#142848", color: "#FFFFFF" } : {}} onClick={(e) => handleMotoBtn(e)}>E5</button>
                                <button type="button" style={button == "E3 L1" ? { backgroundColor: "#142848", color: "#FFFFFF" } : {}} onClick={(e) => handleMotoBtn(e)}>E3 L1</button>
                                <button type="button" style={button == "E3 L3" ? { backgroundColor: "#142848", color: "#FFFFFF" } : {}} onClick={(e) => handleMotoBtn(e)}>E3 L3</button>
                                <button type="button" style={button == "ET3" ? { backgroundColor: "#142848", color: "#FFFFFF" } : {}} onClick={(e) => handleMotoBtn(e)}>ET3</button>
                            </div>
                        </div>
                        <div className={s.enviar}>
                            <button type='submit'>ENVIAR</button>
                        </div>
                    </form>
                    <div className={s.terminos}>
                        <p>Al registrase acepta nuestros <span>términos y condiciones.</span></p>
                    </div>

                </div >
            }
            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
                <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    ¡Demo enviada con exito!
                </Alert>
            </Snackbar>
        </>
    )
}
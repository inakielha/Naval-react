import TextField from '@mui/material/TextField';
import s from "./demo.module.css"
import { HiChevronLeft } from "react-icons/hi";
import logoEcooter from "../../../assets/ecooter/e5/ECOOTER_LOGO_black.png"
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { pathImages } from '../../../pathImages';
import axios from "axios"
import axiosJsonp from 'axios-jsonp';

export default function Demo({ demo, setDemo, demoRoute }) {
    const form = useRef()
    const [button, setButton] = useState("")
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [open, setOpen] = useState("")
    const [completeForm, setCompleteForm] = useState("")


    const handleMotoBtn = (e) => {
        let moto = e.target.innerText;
        setButton(moto)
    }



    async function makeRequest() {
        try {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `api/ecooter/demo/user/create?email=${email}&nombre=${nombre}&direccion=${direccion}&telefono=${telefono}&modelo=${button}`,
                headers: {}
            };
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            if (response.data) setOpen(true)
        }
        catch (error) {
            console.log(error);
        }
    }


    async function send_email() {

    }
    const handleEnviar = async (e) => {
        try {
            e.preventDefault()
            // console.log({
            //     button,
            //     nombre,
            //     direccion,
            //     telefono,
            //     email
            // })
            if (button && nombre && direccion && telefono && email) {
                // console.log("entre")
                // Configurar EmailJS
                let templateParams = {
                    button,
                    nombre,
                    direccion,
                    telefono,
                    email
                };

                if (pathImages) {
                    makeRequest()
                } else {
                    emailjs.send('service_rxbmigl', 'template_sly5l64', templateParams, 'xSaC_xEv6lvaUI57S')
                        .then((result) => {
                            // console.log("LISTOOOOOOOOOO", result.text);
                            setOpen(true)
                        }, (error) => {
                            console.log(error.text);
                        });
                }

                setDemo(false)
            } else {
                setCompleteForm(true)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (demoRoute) setDemo(true)
    }, [])
    return (
        <>
            {
                demo &&

                < div className={s.section} >
                    <form ref={form} className={s.form} onSubmit={(e) => handleEnviar(e)}>

                        {/* <div className={s.imgCont}><img src={pathImages+logoEcooter} alt="" /></div> */}
                        <div className={s.back}>
                            <div className={s.iconCont}>
                                <HiChevronLeft onClick={() => setDemo(false)} className={s.icon} color='#0c4c6b' />
                            </div>
                            <div className={s.titleCont}>
                                <span>FORMULARIO</span>
                            </div>
                            <div style={{ width: "100%" }}></div>
                        </div>

                        <div className={s.inputContWeb}>
                            <TextField
                                className={s.inputWeb}
                                id="Correo Electronico"
                                label="Correo Electronico"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{ style: { fontSize: "21px" } }}
                                InputLabelProps={{ style: { fontSize: "21px" } }}
                            // size="small"
                            />

                            <TextField
                                className={s.inputWeb}
                                id="Nombre Y Apellido"
                                label="Nombre Y Apellido"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                InputProps={{ style: { fontSize: "21px" } }}
                                InputLabelProps={{ style: { fontSize: "21px" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "21px" } }}
                                InputLabelProps={{ style: { fontSize: "21px" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Telefono"
                                label="Telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                InputProps={{ style: { fontSize: "21px" } }}
                                InputLabelProps={{ style: { fontSize: "21px" } }}
                            // size="small"

                            />
                        </div>

                        {/* -----------------------------------MOBILE-------------------------------------- */}
                        <div className={s.inputContMobile}>
                            <TextField
                                id="Correo Electronico"
                                label="Correo Electronico"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{ style: { fontSize: "10px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"
                            />

                            <TextField
                                id="Nombre Y Apellido"
                                label="Nombre Y Apellido"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                InputProps={{ style: { fontSize: "10px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <TextField
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "10px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <TextField
                                id="Telefono"
                                label="Telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                InputProps={{ style: { fontSize: "10px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />
                        </div>

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
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Solicitud de demo
                </Alert>
            </Snackbar>
            <Snackbar open={completeForm} autoHideDuration={6000} onClose={() => setCompleteForm(false)}>
                <Alert onClose={() => setCompleteForm(false)} severity="error" sx={{ width: '100%' }}>
                    Complete todos los campos
                </Alert>
            </Snackbar>
        </>
    )
}
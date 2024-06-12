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
import BasicSelect from './Select/BasicSelect';

export default function Demo({ demo, setDemo, demoRoute }) {
    const form = useRef()
    const [button, setButton] = useState("")
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [provincia, setProvincia] = useState('');
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
                url: `api/ecooter/demo/user/create?email=${email}&nombre=${nombre}&direccion=${direccion}&telefono=${telefono}&modelo=${button}&provincia=${provincia}`,
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'accept-language': 'en-US,en;q=0.9,es;q=0.8'
                }
            };
            const response = await axios.request(config);
            console.log("====RESPUESTAA===");
            console.log(JSON.stringify(response.data));
            if (response.data) setOpen(true)
        }
        catch (error) {
            console.log(error);
        }
    }



    // async function makeRequestFromEcooterDomain() {
    //     try {
    //         console.log("LLAMADA POSTMAN")
    //         let data = '';

    //         let config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: 'navalmotor.com/api/ecooter/demo/user/create?email=julian@navalmotor.com&nombre=Julian Zalba&direccion=Libertador 701&telefono=1153374332&modelo=e3',
    //         headers: { 
    //             'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', 
    //             'accept-language': 'en-US,en;q=0.9,es;q=0.8'
    //         },
    //         data : data
    //         };
    //         const response = await axios.request(config);
    //         console.log("====RESPUESTAA===");
    //         console.log(JSON.stringify(response.data));
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     }




    async function send_email() {

    }
    // console.log(nombre , button , telefono , email, provincia)
    const handleEnviar = async (e) => {


        // console.log("test")
        try {
            e.preventDefault()
            // console.log({
            //     button,
            //     nombre,
            //     direccion,
            //     telefono,
            //     email
            // })
            if (button && nombre && provincia && telefono && email) {
                // console.log("entre")
                // Configurar EmailJS
                let templateParams = {
                    button,
                    nombre,
                    provincia,
                    telefono,
                    email
                };

                if (pathImages) {
                    makeRequest()
                } else {
                    // TEMPLATE VIEJO NO PAGO 
                    // emailjs.send('service_rxbmigl', 'template_sly5l64', templateParams, 'xSaC_xEv6lvaUI57S')
                    //     .then((result) => {
                    //         // console.log("LISTOOOOOOOOOO", result.text);
                    //         setOpen(true)
                    //     }, (error) => {
                    //         console.log(error.text);
                    //     });
                    if (provincia == "Mendoza") {
                        emailjs.send('service_0ggo7td', 'template_thsk18f', templateParams, 'Vj-Ne5y1DqXxLLAb2')
                            .then((result) => {
                                // console.log("LISTOOOOOOOOOO", result.text);
                                setOpen(true)
                            }, (error) => {
                                console.log(error.text);
                            });
                    }

                    else if (provincia == "Vicente Lopez") {
                        emailjs.send('service_0ggo7td', 'template_253v3v3', templateParams, 'Vj-Ne5y1DqXxLLAb2')
                            .then((result) => {
                                // console.log("LISTOOOOOOOOOO", result.text);
                                setOpen(true)
                            }, (error) => {
                                console.log(error.text);
                            });
                    }
                    
                    else {
                        // console.log("entre envio email")
                        emailjs.send('service_0ggo7td', 'template_q4l8wdf', templateParams, 'Vj-Ne5y1DqXxLLAb2')
                            .then((result) => {
                                // console.log("LISTOOOOOOOOOO", result.text);
                                setOpen(true)
                            }, (error) => {
                                console.log(error.text);
                            });
                    }
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
                                <span>Reserva tu Demo</span>
                                <span className={s.subtitulo}>Solicita tu demo. Estamos en contacto</span>
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
                                InputProps={{ style: { fontSize: "15px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit" } }}
                            // size="small"
                            />

                            <TextField
                                className={s.inputWeb}
                                id="Nombre Y Apellido"
                                label="Nombre Y Apellido"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                InputProps={{ style: { fontSize: "15px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit" } }}

                            />

                            {/* <TextField
                                className={s.inputWeb}
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "21px" } }}
                                InputLabelProps={{ style: { fontSize: "21px" } }}
                            // size="small"

                            /> */}


                            <BasicSelect setProvincia={setProvincia} provincia={provincia} />

                            <TextField
                                className={s.inputWeb}
                                id="Telefono"
                                label="Telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                InputProps={{ style: { fontSize: "15px", width: "100%" } }}
                                InputLabelProps={{ style: { fontSize: "16.8px" } }}

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

                            {/* <TextField
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "10px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            /> */}

                            <BasicSelect setProvincia={setProvincia} provincia={provincia} />

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
                    Recibimos la solicitud correctamente. A la brevedad nos pondremos en contacto. Muchas gracias.
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
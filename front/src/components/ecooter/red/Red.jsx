import TextField from '@mui/material/TextField';
import s from "./red.module.css"
import { HiChevronLeft } from "react-icons/hi";
import logoEcooter from "../../../assets/ecooter/e5/ECOOTER_LOGO_black.png"
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { pathImages } from '../../../pathImages';
import BasicSelect from '../demo/Select/BasicSelect';


export default function Red({ red, setRed, redRoute }) {
    const form = useRef()
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [razon, setRazon] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [open, setOpen] = useState("")
    const [completeForm, setCompleteForm] = useState("")
    const [provincia, setProvincia] = useState('');
    const [ciudad, setCiudad] = useState('');

    // console.log(`Ciudad: ${ciudad}, Provincia: ${provincia}, Descripcion: ${descripcion}, Nombre: ${nombre}, Tel: ${telefono}, razon: ${razon}, empresa: ${empresa}, Direccion: ${direccion}`)
    const handleEnviar = (e) => {
        e.preventDefault()
        // console.log({
        //     nombre,
        //     direccion,
        //     telefono,
        //     email
        // })
        if (empresa && nombre && email && direccion && telefono && razon && descripcion, provincia, ciudad) {
            // console.log("entre")
            // Configurar EmailJS
            let templateParams = {
                nombre,
                direccion,
                telefono,
                email,
                empresa,
                razon,
                descripcion,
                ciudad,
                provincia
            };
            if (provincia == "Mendoza") {

                emailjs.send('service_0ggo7td', 'template_9xulan8', templateParams, 'Vj-Ne5y1DqXxLLAb2')
                    .then((result) => {
                        // console.log("LISTOOOOOOOOOO", result.text);
                        setOpen(true)
                    }, (error) => {
                        console.log(error.text);
                    });
            } else {
                emailjs.send('service_0ggo7td', 'template_hlxfyal', templateParams, 'Vj-Ne5y1DqXxLLAb2')
                .then((result) => {
                    // console.log("LISTOOOOOOOOOO", result.text);
                    setOpen(true)
                }, (error) => {
                    console.log(error.text);
                });
            }

            setRed(false)
        } else {
            setCompleteForm(true)
        }
    }

    useEffect(() => {
        if (redRoute) setRed(true)
    }, [])

    return (
        <>
            {
                red &&

                < div className={s.section} >
                    <form ref={form} className={s.form} onSubmit={(e) => handleEnviar(e)}>

                        {/* <div className={s.imgCont}><img src={pathImages+logoEcooter} alt="" /></div> */}
                        <div className={s.back}>
                            <div className={s.iconCont}>
                                <HiChevronLeft onClick={() => setRed(false)} className={s.icon} color='#0c4c6b' />
                            </div>
                            <div className={s.titleCont}>
                                <span>Sumate a nuestro equipo</span>
                                <span className={s.subtitulo}>Convertite en consecionario Ecooter</span>
                            </div>
                            <div style={{ width: "100%" }}></div>
                        </div>

                        <div className={s.inputContWeb}>
                            <TextField
                                className={s.inputWeb}
                                id="Correo Electronico"
                                label="Correo electrónico"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"
                            />

                            <TextField
                                className={s.inputWeb}
                                id="Nombre Y Apellido"
                                label="Nombre y apellido"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Ciudad"
                                label="Ciudad"
                                value={ciudad}
                                onChange={(e) => setCiudad(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />

                            <BasicSelect estilo={s.inputWeb} setProvincia={setProvincia} provincia={provincia} />

                            <TextField
                                className={s.inputWeb}
                                id="Telefono"
                                label="Teléfono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Razon social"
                                label="Razón social"
                                value={razon}
                                onChange={(e) => setRazon(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Empresa"
                                label="Empresa"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                            // size="small"

                            />
                        </div>

                        {/* -----------------------------------MOBILE-------------------------------------- */}
                        <div className={s.inputContMobile}>
                            <TextField
                                id="Correo Electronico"
                                label="Correo electronico"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"
                            />

                            <TextField
                                id="Nombre Y Apellido"
                                label="Nombre y apellido"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <TextField
                                id="Dirección"
                                label="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Ciudad"
                                label="Ciudad"
                                value={ciudad}
                                onChange={(e) => setCiudad(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <BasicSelect estilo={s.inputWeb} setProvincia={setProvincia} provincia={provincia} />


                            <TextField
                                id="Telefono"
                                label="Telefono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Razon social"
                                label="Razon social"
                                value={razon}
                                onChange={(e) => setRazon(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />

                            <TextField
                                className={s.inputWeb}
                                id="Empresa"
                                label="Empresa"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                InputProps={{ style: { fontSize: "8px" } }}
                                InputLabelProps={{ style: { fontSize: "10px" } }}
                            // size="small"

                            />
                        </div>



                        <div className={s.descripcionMobile}>
                            <TextField
                                id="¿Por Qué Quieres Ser Dealer?"
                                label="¿Por qué queres ser dealer?"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ style: { fontSize: "10px", width: "100%" } }}
                                multiline
                            />
                        </div>

                        <div className={s.descripcionWeb}>
                            <TextField
                                id="¿Por Qué Quieres Ser Dealer?"
                                label="¿Por qué queres ser dealer?"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                fullWidth
                                InputProps={{ style: { fontSize: "10px", width: "100%" } }}
                                InputLabelProps={{ classes: { input: s.fontsize }, style: { fontSize: "inherit", backgroundColor: "white" } }}
                                multiline
                            />
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
                    Sumate a la red
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
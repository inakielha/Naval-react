import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import s from "./accordion.module.css"
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


export default function BasicAccordion({ titulo, arrlink, i }) {

    const theme = createTheme({
        components: {
            // Name of the component
            MuiAccordion: {
        styleOverrides: {
            // Name of the slot
            disabled: {
                // Some CSS
                border: 'none',
                    padding: "0",
                        margin: "0",
                            height: "auto",
                            backgroundColor: "green"

            },
        },
    },
},
      });


return (
    <ThemeProvider theme={theme}>
        <Accordion style={i ? { backgroundColor: "red" } : {}} elevation={0} className={s.accordion} >
            <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"

            >
                <Typography className={s.tituloText}>{titulo}</Typography>
            </AccordionSummary>
            {arrlink.length && arrlink.map((info) => {
                return (
                    <AccordionDetails onClick={() => window.location.href = info.url}>
                        <Typography className={s.texto} >
                            {info.text}
                        </Typography>
                    </AccordionDetails>
                )
            })}
        </Accordion>
    </ThemeProvider>

);
}



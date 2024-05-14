import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from "./BasicSelect.module.css"

export default function BasicSelect({provincia, setProvincia}) {
  const [age, setAge] = React.useState('');

  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel className={s.fontsize} id="demo-simple-select-label">Provincia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={provincia}
          label="Provincia"
          className={s.fontsize}
          onChange= {(e) => setProvincia(e.target.value)}
        >
          <MenuItem className={s.fontsize} value={"Cunning"}>Cunning</MenuItem>
          <MenuItem className={s.fontsize} value={"Mendoza"}>Mendoza</MenuItem>
          <MenuItem className={s.fontsize} value={"Vicente Lopez"}>Vicente Lopez</MenuItem>
          <MenuItem className={s.fontsize} value={"Otra"}>Otra</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

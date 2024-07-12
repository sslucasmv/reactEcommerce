import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const ProbandoMaterials = () => {


// variable // estadoVariable // funcion 

// useState , tiene la variable que quiero cambiar, y la funcion, para cambiar la variable
// la funcion para cambiar la variable (que tiene el evento) es distinta a la de useState que esta con la variable
    const [showPassword,setShowPassword] = useState(false)

    const cambiarInput = () => {
        setShowPassword(!showPassword)
    }

    return <div>
        <h1>Probando Materials ui</h1>   

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={cambiarInput}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </div>
}
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"

const CustomInput = ({  setValidationErr, type, label, validate, ...props   }) => {
    const [inputType, setType] = useState(type ? type : 'text')
    const [err, setErr] = useState(null)
    const onBlur = (e) => {
      if (validate) {
        const validationString = validate()
        if (validationString !== true) {
          setErr(validationString)
          setValidationErr(validationString)
        } else { 
          setErr(null)
          setValidationErr(null)
        }
      }
    }
    const onInput = () => {
      setErr(null)
    }
    return (
      <TextField
      
        onInput={onInput}
        fullWidth
        margin="dense"
  
        onBlur={onBlur}
        id={label}
        autoComplete={false}
        label={label}
        
       InputProps={{
        
        
        
        endAdornment:
          type === 'password' ? <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setType(inputType === 'password' ? 'text' : 'password')
              }}
              color="secondary"
              edge="end"
            >
              {inputType === 'password' ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment> : <></>
        
       }}
        {...props}
        type={inputType}
        helperText={err??props.helperText}
        error={err != null}
  
      />
    )
  }
  export default CustomInput
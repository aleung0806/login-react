import { useState } from 'react'
import validator from 'email-validator'
import { useStore } from '../../hooks/store'
import { 
  TextField,
  Box,
  Button
} from '@mui/material'

const style = {
  form: {display: 'flex', flexDirection: 'column', alignItems: 'center'}
}

const RegisterForm = () => {
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const [ emailError, setEmailError ] = useState(false)
  const [ passwordError, setPasswordError ] = useState(false)


  const register = useStore(state => state.register)

  const submitHandler = (e) => {
    setEmailError(!validator.validate(email))

    if (validator.validate(email)){
      register(email, password)
    }
}

  return (
    <Box sx={style.form}>
      <TextField
        autoFocus
        sx={{marginTop: "8px"}}
        InputProps={{ variant: "login" }}
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        helperText={emailError ? "Enter an email address" : ""}
        onKeyDown={(e)=>{ e.key === 'Enter' ? submitHandler() : null}}
      />
      <TextField
        autoFocus
        InputProps={{ variant: "login" }}
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        helperText={passwordError ? "Enter a password" : ""}
        onKeyDown={(e)=>{ e.key === 'Enter' ? submitHandler() : null}}
      />
      <Button         
        sx={{marginTop: "8px"}}
        variant="login" 
        onClick={submitHandler}
      >
        Sign up
      </Button>
  </Box>

  )
}

export default RegisterForm
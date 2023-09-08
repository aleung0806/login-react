import { useState } from 'react'
import validator from 'email-validator'

import { 
  TextField,
  Box,
  Button
} from '@mui/material'

const style = {
  form: {display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1}
}

const RegisterForm = ({sent, setSent}) => {
  const [ email, setEmail] = useState('')
  const [ error, setError ] = useState(false)

  const submitHandler = (e) => {
    setError(!validator.validate(email))
    if (validator.validate(email)){
      setSent(email)
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
        error={error}
        helperText={error ? "Enter an email address" : ""}
        onKeyDown={(e)=>{ e.key === 'Enter' ? submitHandler() : null}}
      />
      <Button variant="login" onClick={submitHandler}>
        Sign up
      </Button>
  </Box>

  )
}

export default RegisterForm
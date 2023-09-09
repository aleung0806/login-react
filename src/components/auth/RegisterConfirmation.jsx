import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import Footer from './Footer'
import mailImage from 'icons/mail-image.png'


import { 
  Link,
  Box,
  Button,
  Typography,
  OutlinedInput
} from '@mui/material'



const RegisterConfirmation = ({email}) => {

              
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>

        <Typography variant='h1' sx={{paddingTop: '24px', marginBottom: '16px'}}>
          Check your inbox to log in
        </Typography>
        <Box 
          sx={{marginTop: "8px", marginBottom: "16px"}}
          component="img"
          height="88px"
          src={mailImage}
        />
        <Typography variant="p1">
          To complete setup and log in, click the verification link in the email we’ve sent to
        </Typography>
        <Typography variant='h1' sx={{textAlign: 'left', marginTop: "4px", marginRight: 'auto'}}>
          {email}
        </Typography>
        <Link 
          variant='body'
          href=''
          sx={{paddingTop: '24px', marginBottom: "16px"}}
          onClick={() => {()=>{}}}
        >
          Resend verification email
        </Link>
    </Box>
  )

}

export default RegisterConfirmation
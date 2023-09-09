import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import GoogleButton from '../auth/GoogleButton'
import jiraLogo from 'icons/jira-logo.svg'

import googleLogo from 'icons/google-logo.svg'

import RegisterForm from '../auth/RegisterFormSimple'
import Footer from '../auth/Footer'
import RegisterConfirmation from '../auth/RegisterConfirmation'


import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const style = {
  page: {display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' },
  modal: { width: '400px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px', padding: "32px 40px"},
  container: {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', },
  link: {paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}
}

export const RegisterPage = () => {

  const [sent, setSent] = useState('')
  const navigate = useNavigate()
  
  return (
    <Box sx={style.page}>
      <Box sx={style.modal}>
        {sent === '' 
        ? ( <Box sx={style.container}>
              <Box component="img" height="40px" src={jiraLogo} />
              <Typography variant="h1" sx={{paddingTop: '24px'}}>
                  Sign up to continue
              </Typography>
              <RegisterForm sent={sent} setSent={setSent}/>
              {/* <GoogleButton/> */}
              <Link variant="body" sx={style.link} href="login">
                Already have an account? Log in
              </Link>
            </Box> )
        : ( <RegisterConfirmation email={sent} />)}
          <Footer/>
      </Box>
    </Box>
    
  )

}
export default RegisterPage


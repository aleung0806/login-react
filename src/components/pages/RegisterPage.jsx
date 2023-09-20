import { useTheme } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import GoogleButton from '../auth/GoogleButton'
import jiraLogo from 'icons/jira-logo.svg'
import { useStore } from '../../store'

import googleLogo from 'icons/google-logo.svg'

import RegisterForm from '../auth/RegisterFormSimple'
import Footer from '../auth/Footer'
import RegisterConfirmation from '../auth/RegisterConfirmation'

import TestInfo from '../debug/TestInfo'
import NetworkInfo from '../debug/NetworkInfo'
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
  console.log('rendering register')
 
  const navigate = useNavigate()
  const register = useStore(state => state.register)
  const user = useStore((state) => state.user)
  const verifySession = useStore((state) => state.verifySession)

  useEffect(() => {
    const auth = async () => {
      const verifiedUser = await verifySession()
      if(verifiedUser !== null){
        navigate('/')
      }
    }
    auth()
  }, [])

  useEffect(() => {
    if(user !== null){
      navigate('/')
    }
  }, [user])



  
  return (
    <Box sx={style.page}>
      <TestInfo/>
      <NetworkInfo/>
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


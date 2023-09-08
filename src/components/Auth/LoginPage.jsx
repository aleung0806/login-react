import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from 'reducers/auth'
import { useState, useEffect } from 'react'
import GoogleButton from './components/GoogleButton'
import jiraLogo from 'icons/jira-logo.svg'
import googleLogo from 'icons/google-logo.svg'

import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import RegisterConfirmation from './components/RegisterConfirmation'


import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoggedInUser } from 'hooks/useLoggedInUser'

const style = {
  page: {display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' },
  modal: { width: '400px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px', padding: "32px 40px"},
  container: {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', },
  link: {paddingTop: '24px', textAlign: 'center', marginBottom: "16px"}
}

export const LoginPage = () => {

  const [sent, setSent] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    if (user !== null){
      navigate('/')
    } 
  }, [user])

  return (
    <Box sx={style.page}>
      <Box sx={style.modal}>
        <Box sx={style.container}>
          <Box component="img" height="40px" src={jiraLogo} />
          <Typography variant="h1" sx={{paddingTop: '24px'}}>
              Log in to continue
          </Typography>
          <LoginForm />
          <Link variant="body" sx={style.link} href="register">
            Create an Account
          </Link>
        </Box>
        <Footer/>
      </Box>
      {user !== null ? <Typography>Logged In User: {user.username}</Typography> : null}
    </Box>
  )

}


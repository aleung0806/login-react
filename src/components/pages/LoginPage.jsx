
import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'
import GoogleButton from '../auth/GoogleButton'
import { useQuery } from 'react-query'
import LoginForm from '../auth/LoginForm'
import Footer from '../auth/Footer'
import LogoutButton from '../auth/LogoutButton'

import { useStore } from '../../hooks/store'
import authService from '../../services/auth'
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
  console.log('rendering login')
 
  const navigate = useNavigate()
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
      <Box sx={style.modal}>
        <Box sx={style.container}>
          <Box component="img" height="40px" src={jiraLogo} />
          <Typography variant="h1" sx={{paddingTop: '24px'}}>
              Log in to continue
          </Typography>
          <LoginForm />
          {/* <GoogleButton/> */}
          <Link variant="body" sx={style.link} href="register">
            Create an Account
          </Link>
        </Box>
        <Footer/>
      </Box>
      {user !== null ? <Typography>Logged In User: {user.username}</Typography> : null}
      <LogoutButton/>
    </Box>
  )

}
export default LoginPage

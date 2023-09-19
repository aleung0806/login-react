import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'
import { useCookies } from 'react-cookie';

import { useStore } from '../../store'
import { userService }from '../../services'

import { 
  TextField,
  Input,
  Button,
  Box,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoggedInUser } from 'hooks/useLoggedInUser'

import UserDebug from './UserDebug'
import ProjectDebug from './ProjectDebug'

const containerStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1rem',
  testTransform: 'none',
  gap: 5,
}

const linkStyle = {
  cursor: 'pointer'
}

const userInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1rem',
  testTransform: 'none'
}




const TestInfo = () => {


  console.log('rendering TestInfo')
  const user = useStore((state) => state.user)
  const login = useStore(state => state.login)
  const logout = useStore((state) => state.logout)
  const verifySession = useStore(state => state.verifySession)

  const [cookies, setCookie, removeCookie] = useCookies();

  const loginTurkey= async () => {
    await login('testerturkey@gmail.com', 'password')
  }

  return (
    <Box sx={containerStyle}>
      <Typography>
        Authentication
      </Typography>
      <Box sx={userInfoStyle}>
        <button onClick={loginTurkey}>log in as turkey</button>
        <button sx={linkStyle} onClick={logout}>log out</button>
        <button sx={linkStyle} onClick={verifySession}>verifySession</button>
        <pre>
          Logged in user is: {JSON.stringify(user, null, 2)}
        </pre>
      </Box>
      <UserDebug/>
      <ProjectDebug/>

    </Box>
  )
}

export default TestInfo
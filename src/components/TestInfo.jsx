import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'
import { useCookies } from 'react-cookie';

import { useStore } from '../hooks/store'
import authService from '../services/auth'
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


const TestInfo = () => {
  console.log('rendering TestInfo')
  const user = useStore((state) => state.user)
  const login = useStore(state => state.login)
  const logout = useStore((state) => state.logout)
  const verifySession = useStore(state => state.verifySession)


  const allUsers = useStore((state) => state.allUsers)
  const getAllUsers = useStore((state) => state.getAllUsers)

  const [cookies, setCookie, removeCookie] = useCookies();

  const loginTurkey= async () => {
    await login('turkey@cat.com', '123password')
  }

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

  const adminInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '1rem',
    testTransform: 'none'
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
      <Typography>
        Admin
      </Typography>
      <Box sx={adminInfoStyle}>

        <button onClick={getAllUsers}>get all users</button>
        <Typography>
          All users: {JSON.stringify(allUsers, null, 2)}
        </Typography>
      </Box>
    </Box>
  )
}

export default TestInfo
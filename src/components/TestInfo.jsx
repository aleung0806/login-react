import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'

import { useStore } from '../hooks/store'
import authService from '../services/auth'
import { 
  TextField,
  Input,
  Box,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoggedInUser } from 'hooks/useLoggedInUser'


const TestInfo = () => {
  const login = useStore(state => state.login)
  const user = useStore((state) => state.user)
  const logout = useStore((state) => state.logout)
  const verifySession = useStore(state => state.verifySession)

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
    testTransform: 'none'
  }

  const linkStyle = {
    cursor: 'pointer'
  }

  return (
    <Box sx={containerStyle}>
      <Typography sx={linkStyle} onClick={loginTurkey}>log in as turkey</Typography>
      <Typography sx={linkStyle} onClick={logout}>log out</Typography>
      <Typography sx={linkStyle} onClick={verifySession}>verifySession</Typography>

      <Typography>
      Logged in user is: {user && JSON.stringify(user, null, 2)}
      </Typography>
    </Box>
  )
}

export default TestInfo
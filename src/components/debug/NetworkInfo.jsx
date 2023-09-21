import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'
import { useCookies } from 'react-cookie';

import { useStore } from '../../store'


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


const NetworkInfo = () => {
  const request = useStore((state) => state.request)
  const response = useStore((state) => state.response)

  const containerStyle = {
    position: 'absolute',
    right: 200,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '1rem',
    testTransform: 'none',
  }

  const sectionStyle={
    paddingLeft: '2rem'

  }

  return (
    <Box sx={containerStyle}>
      <Typography> Request </Typography>
      <Box sx={sectionStyle}>
        <pre>{JSON.stringify(request, null, 2)}</pre>
      </Box>
      <Typography> Response </Typography>
      <Box sx={sectionStyle}>
        
      <pre>{JSON.stringify(response, null, 2)}</pre>

      </Box>
    </Box>
  )
}

export default NetworkInfo
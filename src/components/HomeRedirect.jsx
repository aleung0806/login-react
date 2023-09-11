import { useCallback, useState, useEffect , useRef} from 'react'
import { useStore } from '../hooks/store'
import { useQuery } from 'react-query'

import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomeRedirect= ({children}) => {
  console.log('rendering auth')
  const navigate = useNavigate()
  const authUser = useStore(state => state.authUser)
  const user = useStore(state => state.user)
  const { status } = useQuery('user', async () => {
    return await authUser
  })

  if (status === 'loading'){
    return <Box>loading</Box>
  }

  if (status === 'error'){
    return <Box>error</Box>
  }

  if (status === 'success' && user === null){
    navigate('/login')
  }

  return (
    <Box>
      {children}
    </Box>
  )
}

export default HomeRedirect
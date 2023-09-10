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

const Verify = ({children}) => {
  console.log('rendering verify')
  const verifyUser = useStore(state => state.verifyUser)
  const { status } = useQuery('user', async () => {
    return await verifyUser
  })

  if (status === 'loading'){
    return <Box>loading</Box>
  }

  if (status === 'error'){
    return <Box>error</Box>
  }

  return (
    <Box>
      {children}
    </Box>
  )
}

export default Verify
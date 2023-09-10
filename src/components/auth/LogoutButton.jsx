import { useCallback, useState, useEffect , useRef} from 'react'
import { useStore } from '../../hooks/store'

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

const LogoutButton = () => {

  const logout = useStore((state) => state.logout)
  return (
    <Button onClick={logout}>
      Log out
    </Button>
  )
}

export default LogoutButton
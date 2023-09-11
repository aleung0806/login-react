import { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box,
  Button,
  Typography
} from '@mui/material'
import { useQuery } from 'react-query'

import { useStore } from '../../hooks/store'
import authService from '../../services/auth'
import TestInfo from '../TestInfo'

import LogoutButton from '../auth/LogoutButton'


const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'stretch'
}

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'

}

const HomePage = () => {
  console.log('rendering home')

  const navigate = useNavigate()
  const user = useStore(state => state.user)
  const verifySession = useStore(state => state.verifySession)

  const [ sessionVerified, setSessionVerified ] = useState(false)

  useEffect(() => {
    const auth = async () => {
      const verifiedUser = await verifySession()
      if(verifiedUser === null){
        navigate('/login')
      }
      setSessionVerified(true)
    }
    auth()
  }, [])

  useEffect(() => {
    if(user === null && sessionVerified){
      navigate('/login')
    }
  }, [user])

  return (
    <Box sx={pageStyle}>
      <Box sx={bodyStyle}>
        
      </Box>
      <TestInfo/>
    </Box>
  )
}

export default HomePage

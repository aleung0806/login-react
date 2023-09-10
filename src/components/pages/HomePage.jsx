import { useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box,
  Button
} from '@mui/material'
import { useQuery } from 'react-query'

import { useStore } from '../../hooks/store'
import authService from '../../services/auth'

import LogoutButton from '../auth/LogoutButton'


const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'stretch'
}

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch'

}

const HomePage = () => {
  console.log('rendering home')

  const navigate = useNavigate()
  const user = useStore(state => state.user)
  const verifyUser = useStore(state => state.verifyUser)

  useEffect(() => {
    const verify = async () => {
      const verifiedUser = await verifyUser()
      if(verifiedUser === null){
        navigate('/login')
      }
    }
    verify()
  }, [])

  return (
    <Box sx={pageStyle}>
      <Box sx={bodyStyle}>
        {user && user.username}
      </Box>
      <Button onClick={verifyUser}>Verify</Button>
      <LogoutButton/>
    </Box>
  )
}

export default HomePage

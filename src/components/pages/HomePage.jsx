import { useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box,
  Button
} from '@mui/material'
import { useQuery } from 'react-query'

import { useStore } from '../../hooks/store'
import authService from '../../services/auth'

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
  const navigate = useNavigate()
  const user = useStore(state => state.user)
  const verifyUser = useStore(state => state.verifyUser)

  useEffect(() => {
    verifyUser()
  }, [])


  useEffect(() => {
    if(user === null){
      //navigate('/login')
    }
  }, [user])

  return (
    <Box sx={pageStyle}>
      <Box sx={bodyStyle}>
        {user && user.username}
      </Box>
      <Button onClick={verifyUser}>Verify</Button>
    </Box>
  )
}

export default HomePage

import { useEffect, useState } from 'react'
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
  const authUser = useStore(state => state.authUser)

  const [ authComplete, setAuthComplete ] = useState(false)

  useEffect(() => {
    const auth = async () => {
      const verifiedUser = await authUser()
      if(verifiedUser === null){
        navigate('/login')
      }
      setAuthComplete(true)
    }
    auth()
  }, [])

  useEffect(() => {
    if(user === null && authComplete){
      navigate('/login')
    }
  }, [user])

  return (
    <Box sx={pageStyle}>
      <Box sx={bodyStyle}>
        {user && user.username}
      </Box>
      <Button onClick={authUser}>Auth</Button>
      <LogoutButton/>
    </Box>
  )
}

export default HomePage

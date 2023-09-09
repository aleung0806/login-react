import { useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box
} from '@mui/material'

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

  const user = useStore((state) => state.user)

  useEffect(() => {
    console.log(user)
    if (user === null){
      navigate('/login')
    }
  },[])

return (
  <Box sx={pageStyle}>
    <Box sx={bodyStyle}>
      user.username
    </Box>
  </Box>
  )
}

export default HomePage

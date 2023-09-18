import { useEffect, useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box,
} from '@mui/material'

import { useStore } from '../../hooks/store'

import TestInfo from '../TestInfo'
import NetworkInfo from '../NetworkInfo'

import Project from '../components/jira/Project'
import NavBar from '../components/jira/NavBar'
import SideMenu from '../components/jira/SideMenu'


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
      <NavBar/>
      <Box sx={bodyStyle}>
        <SideMenu project={project}/>
        <Project project={project}/>
      </Box>
      <TestInfo/>
      <NetworkInfo/>
    </Box>
  )
}

export default HomePage

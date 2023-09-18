import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box,
} from '@mui/material'

import { useStore } from '../../store'

import TestInfo from '../debug/TestInfo'
import NetworkInfo from '../debug/NetworkInfo'
import SideMenu from '../sideMenu/SideMenu'
import NavBar from '../navBar/NavBar'
import Project from '../project/Project'


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

const ProjectPage = () => {
  console.log('rendering home')

  const navigate = useNavigate()
  const user = useStore(state => state.user)
  const project = useStore(state => state.project)

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
      {/* <TestInfo/>
      <NetworkInfo/> */}
    </Box>
  )
}

export default ProjectPage

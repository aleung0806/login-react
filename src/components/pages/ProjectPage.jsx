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
  alignItems: 'stretch',

  
}

const bodyStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
}

const ProjectPage = () => {
  console.log('rendering home')

  const navigate = useNavigate()
  const user = useStore(state => state.user)
  const project = useStore(state => state.project)

  const verifySession = useStore(state => state.verifySession)

  const getProject = useStore(state => state.getProject)
  const getAllProjects = useStore(state => state.getAllProjects)


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
    (async () => {
      if(user === null && sessionVerified){
        navigate('/login')
      }
      if(user !== null){
        if (user.projects !== []){
          await getProject(user.projects[0].id)
        }
      }
      
    })()
  }, [user])

  return (
    
    <Box >
      {user !== null && project !== null &&
      <Box sx={pageStyle} >
        <NavBar/>
        <Box sx={bodyStyle}>
          <SideMenu />
          <Project />
        </Box>
        
        {/* <TestInfo/>
        <NetworkInfo/> */}
      </Box>
      }
      
    </Box>
    
  )
}

export default ProjectPage

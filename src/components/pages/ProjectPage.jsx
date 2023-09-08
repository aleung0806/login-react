import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate , useParams } from 'react-router-dom'
import { 
  Box
} from '@mui/material'

import Project from '../Project'
import NavBar from '../NavBar'
import SideMenu from '../SideMenu'
import { fetchProject } from '../../reducers/project'
import { fetchAllProjects } from '../../reducers/allProjects'
import { fetchUser } from '../../reducers/auth'
import { verifySession } from '../../reducers/auth'

import VerifySession from './VerifySession'

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

const ProjectPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)
  const projects = useSelector(state => state.allProjects)
  const project = useSelector(state => state.project)

  useEffect(() => {
    if (project === null || project.id !== parseInt(id) ){
      dispatch(fetchProject(id))
    }
  }, [id])

  useEffect(() => {
    if (user === null){
      navigate('/login')
    } 
  }, [user])


  return (
        <VerifySession >
          {user !== null && projects !== null && project !== null  &&
            <Box sx={pageStyle}>
              <NavBar/>
              <Box sx={bodyStyle}>
                <SideMenu project={project}/>
                <Project project={project}/>
              </Box>
            </Box>
          }
        </VerifySession>

  )
}

export default ProjectPage

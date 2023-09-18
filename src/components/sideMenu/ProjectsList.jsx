import { 
  Box, 
  IconButton,
  Typography,
  List,
  ListItem,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import AddProjectButton from './AddProjectButton'

import { useStore } from '../../store'

const ProjectsList = () => {
  const projects = useStore(state => state.allProjects)
  const navigate = useNavigate()

  const redirectHandler = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingTop: '10px'}}>
      {projects.map(project => {
        return (
          <Button sx={{justifyContent: 'flex-start', alignItems: 'flex-start'}} key={project.id} onClick={() => redirectHandler(project.id)} >
            
            <Typography sx={{textTransform: 'none'}}>{project.title}</Typography>
          
          </Button>
        )
      })}
      <AddProjectButton/>
    </Box>
  )
}

export default ProjectsList 
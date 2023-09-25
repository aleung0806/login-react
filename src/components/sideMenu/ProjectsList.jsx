import { 
  Box, 
  IconButton,
  Typography,
  List,
  ListItem,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AddProjectButton from './AddProjectButton'

import { useStore } from '../../store'

const ProjectsList = () => {
  const [display, setDisplay ] = useState(false)
  const projects = useStore(state => state.user.projects)
  const navigate = useNavigate()
  const getProject = useStore(state => state.getProject)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '10px', width: '100%',}}>
      <Box> 
        <Typography sx={{fontWeight: 700, textTransform: 'uppercase', fontSize: '11px', marginTop: '2rem', marginBottom: '0.5rem', color: '#42526E'}}>Other Projects</Typography>
      </Box>
      {projects.map(project => {
        return (
          <Button sx={{justifyContent: 'space-between', alignItems: 'center', height: '3rem'}} key={project.id} onClick={() => getProject(project.id)} >
            
            <Typography sx={{textTransform: 'none', fontSize: '14px', textAlign: 'start'}}>{project.title}</Typography>
            <Typography sx={{textTransform: 'none', fontSize: '12px'}}>{project.role}</Typography>

          </Button>
        )
      })}
      <AddProjectButton/>
    </Box>
  )
}

export default ProjectsList 
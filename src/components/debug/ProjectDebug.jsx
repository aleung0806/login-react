import { useState, useEffect } from 'react'


import { useStore } from '../../store'
import { projectService }from '../../services/jira'

import { 
  TextField,
  Input,
  Button,
  Box,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoggedInUser } from 'hooks/useLoggedInUser'

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1rem',
  testTransform: 'none'
}
const ProjectDebug = () => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const projects= useStore((state) => state.projects)
  const getAllProjects = useStore((state) => state.getAllProjects)

  return (
    <Box sx={boxStyle}>
      <Typography>Project</Typography>
      <form>
        <label>id</label> <input value={id} onChange={(e)=> setId(e.target.value)}/>
      </form>
      <form>
        <label>title</label> <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </form>

      <button onClick={() => projectService.create({title: title})}>create</button>
      <button onClick={() => projectService.getById(id)}>get</button>
      <button onClick={() => projectService.updateById(id, {title: title})}>update</button>
      <button onClick={() => projectService.removeById(id)}>remove</button>
      <button onClick={projectService.removeAll} >remove all</button>
      <button onClick={getAllProjects} >get all</button>

      <pre>
        {JSON.stringify(projects, null, 2)}
      </pre>
    </Box>
  )
}

export default ProjectDebug
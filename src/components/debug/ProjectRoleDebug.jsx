import { useState} from 'react'


import { useStore } from '../../store'
import { projectRoleService }from '../../services/jira'

import { 
  Box,
  Typography,
} from '@mui/material'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1rem',
  testTransform: 'none'
}
const ProjectRole = () => {
  const [userId, setUserId] = useState('')
  const [projectId, setProjectId] = useState('')
  const [role, setRole] = useState('')


  const projectRoles = useStore((state) => state.projectRoles)
  const getAllProjectRoles = useStore((state) => state.getAllProjectRoles)
  
  return (
    <Box sx={containerStyle}>
      <Typography>ProjectRole</Typography>
      <form>
        <label>userId</label> <input value={userId} onChange={(e)=> setUserId(e.target.value)}/>
      </form>
      <form>
        <label>projectId</label> <input value={projectId} onChange={(e)=> setProjectId(e.target.value)}/>
      </form>
      <form>
        <label>role</label> <input value={role} onChange={(e)=> setRole(e.target.value)}/>
      </form>
      <button onClick={() => projectRoleService.create({userId, projectId, role})}>create</button>
      <button onClick={() => projectRoleService.get(id)}>get</button>
      <button onClick={() => projectRoleService.update(id, {userId, projectId, role})}>update</button>
      <button onClick={() => projectRoleService.remove(id)}>remove</button>

      <button onClick={projectRoleService.removeAll} >remove all</button>
      <button onClick={getAllProjectRoles}>get all </button>
      <pre>
        {JSON.stringify(projectRoles, null, 2)}
      </pre>
    </Box>
  )
}

export default ProjectRole
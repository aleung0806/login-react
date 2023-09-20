import { useState, useEffect } from 'react'


import { useStore } from '../../store'
import { listService }from '../../services/jira'

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
const ListDebug = () => {
  const [id, setId] = useState('')
  const [projectId, setProjectId] = useState('')
  const [title, setTitle] = useState('')

  return (
    <Box sx={boxStyle}>
      <Typography>List</Typography>
      <form>
        <label>id</label> <input value={id} onChange={(e)=> setId(e.target.value)}/>
      </form>
      <form>
        <label>projectId</label> <input value={projectId} onChange={(e)=> setProjectId(e.target.value)}/>
      </form>
      <form>
        <label>title</label> <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </form>

      <button onClick={() => listService.create({title: title, projectId: projectId})}>create</button>
      <button onClick={() => listService.get(id)}>get</button>
      <button onClick={() => listService.update(id, {title: title})}>update</button>
      <button onClick={() => listService.remove(id)}>remove</button>
      <button onClick={listService.removeAll} >remove all</button>
      <button onClick={listService.getAll} >get all</button>

    </Box>
  )
}

export default ListDebug
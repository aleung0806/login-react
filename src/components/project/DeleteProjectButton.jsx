import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Typography,
  IconButton,
  Box
 } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import DeleteModal from '../reusable/DeleteModal'
import { useStore } from '../../store'

const DeleteProjectButton = ({project}) => {
  const navigate = useNavigate()
  const projects = useStore(state => state.allProjects)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleDelete = () => {
    dispatch(deleteProject(project.id))
    navigate(`/project/${projects[0].id}`)
  }

  const Message = () => {
    return (
      <Typography sx={{display: 'flex', flexDirection: 'column'}} align={'center'}>
        Delete&nbsp;<strong>{project.title}</strong>&nbsp;with all its lists and tasks?
      </Typography>
    )
  }

  return (
    <Box>
      <IconButton sx={{borderRadius: 1}} onClick={handleOpen}>
        <DeleteIcon fontSize={'small'}/>
      </IconButton>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        Message={Message}
        handleDelete={handleDelete}
        />
    </Box>
  )
}

export default DeleteProjectButton
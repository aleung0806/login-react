import { useState } from 'react'
import { 
  Typography,
  IconButton,
  Box
 } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { projectService } from '../../services/jira'
import DeleteModal from '../reusable/DeleteModal'
import { useStore } from '../../store'

const DeleteProjectButton = ({project}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const refreshSession = useStore(state => state.refreshSession)
  const setProject = useStore(state => state.setProject)
  const user = useStore(state => state.user)


  const handleDelete = async () => {
    await projectService.remove(project.id)
    await setProject(user.projects[0])
    await refreshSession()

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
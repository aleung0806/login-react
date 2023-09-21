import { useState } from 'react'
import { 
  Typography,
  IconButton,
  Box
 } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { listService } from '../../services/jira'
import { useStore } from '../../store'
import DeleteModal from '../reusable/DeleteModal'

const DeleteListButton = ({list}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDelete= async () => {
    await listService.remove(list.id)
  }

  const Message = () => {
    return (
      <Typography sx={{display: 'flex', flexDirection: 'column'}} align={'center'}>
        {console.log(list)}
        Delete&nbsp;<strong>{list.title}</strong>&nbsp;with its {list.issues !== [] && list.issues.length} tasks?
      </Typography>
    )
  }

  return (
    <Box>
      <IconButton sx={{borderRadius: 1}} onClick={handleOpen}>
        <DeleteIcon className='deleteIcon' sx={{}} fontSize={'small'}/>
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

export default DeleteListButton

import { useState } from 'react'
import { 
  Typography, 
  Box,
  MenuItem,
 } from '@mui/material'
import DeleteModal from '../reusable/DeleteModal'
import { useStore } from '../../store'
import { issueService } from '../../services/jira'
const buttonStyle = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'flex-start',
}
const DeleteIssueButton = ({issue, closeMenu}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    closeMenu()
  }
  const handleDelete= async () => {
    await issueService.remove(issue.id)

  }

  const Message = () => {
    return (
      <Typography sx={{display: 'flex', flexDirection: 'row'}} align={'center'}>
        Delete&nbsp;<strong>{issue.title}</strong>&nbsp;?
      </Typography>
    )
  }

  return (
    <MenuItem sx={buttonStyle} onClick={handleOpen}>
      <Typography sx={{fontSize: '12px'}}>
        Delete
      </Typography>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        Message={Message}
        handleDelete={handleDelete}
      />
    </MenuItem>

  )
  }

export default DeleteIssueButton
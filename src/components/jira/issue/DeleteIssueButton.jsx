
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
  Typography, 
  Box,
  MenuItem,
 } from '@mui/material'
import { deleteIssue } from '../../reducers/project'
import DeleteModal from '../reusable/DeleteModal'

const buttonStyle = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'flex-start',
}
const DeleteIssueButton = ({issue, closeMenu}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    closeMenu()
  }
  const handleDelete= () => {
    dispatch(deleteIssue(issue))
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
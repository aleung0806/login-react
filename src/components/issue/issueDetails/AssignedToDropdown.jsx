import { useState } from 'react'
import { useStore } from '../../../store'
import { issueService } from '../../../services/jira'

import {
  Box,
  Typography,
  Menu,
  MenuItem, 
  Button
} from '@mui/material'

import InitialsAvatar from '../../reusable/InitialsAvatar'

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: 'auto',
}

const buttonStyle = {
  display: 'flex', 
  gap: 1, 
  justifyContent: 'space-between'
}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'none'
}

const avatarStyle = {
  height: '20px', 
  width: '20px', 
  fontSize: '8px'
}

const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}

const AssignedToDropdown = ({ issue }) => {
  const [anchor, setAnchor] = useState(null)
  const selections = useStore(state => state.project.users)
  const assignedTo = issue.assigneeId === null
    ? null
    : selections.find(user => user.id === issue.assigneeId)
  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = async (selected) => {
    document.activeElement.blur()
    await issueService.update(issue.id, {assigneeId: selected})
    handleClose()
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14' sx={{color: 'rgb(9, 30, 66)'}}>Assigned To</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          {assignedTo === null
            ? <Typography sx={buttonTextStyle}>{'not assigned'}</Typography>
            : <Box sx = {menuItemStyle}>
                <InitialsAvatar  sx={avatarStyle} user={assignedTo}/> 
                <Typography sx={buttonTextStyle}>{`${assignedTo.username} `}</Typography>
              </Box>
          }
        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {selections
          .map(selection => {
            return (
              <MenuItem key={selection.id} sx={menuItemStyle} onClick={() => handleSelect(selection.id)}>
                <InitialsAvatar  sx={avatarStyle} user={selection}/> 
                <Typography sx={buttonTextStyle}>{`${selection.username} `}</Typography>
              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default AssignedToDropdown
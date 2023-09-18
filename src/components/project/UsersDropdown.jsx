import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIssue } from '../../../reducers/project'

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
  flexDirection: 'column'
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
  const dispatch = useDispatch()
  const selections = useSelector(state => state.project.users)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = (selected) => {
    document.activeElement.blur()
    dispatch(updateIssue({ ...issue, assigneeId: selected }))
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Button sx={buttonStyle} onClick={handleOpen}>
            ? <Typography sx={buttonTextStyle}>{'find user'}</Typography>          
        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {selections
          .map(selection => {
            return (
              <MenuItem key={selection.id} sx={menuItemStyle} onClick={() => handleSelect(selection.id)}>
                <InitialsAvatar  sx={avatarStyle} user={selection}/> 
                <Typography sx={buttonTextStyle}>{`${selection.firstName} ${selection.lastName}`}</Typography>
              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default AssignedToDropdown
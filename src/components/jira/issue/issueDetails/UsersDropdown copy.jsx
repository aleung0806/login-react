import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  ButtonIcon,
  TextField,
  Menu,
  MenuItem,
 } from '@mui/material'

import Dropdown from '../../reusable/Dropdown'
import { useState } from 'react'
import InitialsAvatar from '../../reusable/InitialsAvatar'
import { useSelector } from 'react-redux'
import { useResolvedPath } from 'react-router-dom'
const dropdownButtonStyle = {

}

const menuChildrenStyle = {
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}
const menuStyle={

  'margin': 0,
  'padding': 0
}

const menuItemStyle={
  'fontWeight': 'normal'

}

const iconStyle = {
  // "&:hover":{color: '#ff5436'}
}
const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 5
}

const avatarStyle = {
  height: '20px', width: '20px', fontSize: '8px'
}

const UsersDropdown = ({issue}) => {
  const users = useSelector(state => state.project.users)
  console.log('users are', users)
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget)}
  const handleClose = () => { setAnchor(null) }

  const handleSelect = () => {

  }

  return (
    <Box variant='flexRow' sx={boxStyle}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}}>
        <Typography variant='darkestBold14'>Creator</Typography>
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
          <InitialsAvatar sx={avatarStyle} name={'First Last'}/> 
          <Typography sx={{fontSize: '12px', textTransform: 'none'}}>{'First Last'}</Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'left'}}>
        <Typography variant='darkestBold14'>Assignee</Typography>
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}} onClick={handleOpen}>
            <InitialsAvatar  sx={avatarStyle} name={'Last Last'}/> 
            <Typography sx={{fontSize: '12px', textTransform: 'none'}}>{'Last Last'}</Typography>
        </Box>
        <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} sx={menuStyle}>
        {users
          .map(user => {
          return (
            <MenuItem key={user.id}>
              <Box sx={{display: 'flex', gap: 1}} onClick={handleSelect}>
                <InitialsAvatar  sx={avatarStyle} name={user.name}/> 
                <Typography sx={{fontSize: '12px'}}>{user.name}</Typography>
              </Box >
            </MenuItem>
          )
          })}
      </Menu>
      </Box>
    </Box>
  )
}

export default UsersDropdown
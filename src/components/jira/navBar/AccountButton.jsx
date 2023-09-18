import { useState } from 'react'
import {
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuItem,
  Divider,
  Box,
  Typography,
  Avatar,
  ListItemIcon,
} from '@mui/material'

import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import InitialsAvatar from '../reusable/InitialsAvatar'

import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/auth'

const avatarStyles = {
  height: '24px',
  width: '24px',
  fontSize: '10px',

}

const AccountButton = ()  => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const [open, setOpen] = useState(false)
  const logoutHandler = () => {

    dispatch(logout())
    navigate('/login')
  }

  const [anchor, setAnchor] = useState(null);

  const handleOpen = (e) => {
    setOpen(true)
    setAnchor(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
    setAnchor(null)
  }

  return (
    <Box>
      {user !== null &&
      <Box>


          <IconButton onClick={handleOpen} >
            <InitialsAvatar sx={avatarStyles} user={user}/>
          </IconButton>
        <Menu
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              bgcolor: 'background.paper',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))'
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >

          <MenuItem sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <InitialsAvatar sx={avatarStyles} user={user}/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <Typography sx={{fontSize: 16}}>{user.firstName} {user.lastName}</Typography>
              <Typography sx={{fontSize: 10, color: 'primary.light'}}>{user.email}</Typography>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={logoutHandler}>
            Log out
          </MenuItem>
        </Menu>
        </Box>
      }
    </Box>
  );
}

export default AccountButton
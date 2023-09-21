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
import { useStore } from '../../store'
import authService from '../../services/auth'
import InitialsAvatar from '../reusable/InitialsAvatar'
import { useNavigate } from 'react-router-dom'
const avatarStyles = {
  height: '24px',
  width: '24px',
  fontSize: '10px',

}

const AccountButton = ()  => {
  const navigate = useNavigate()
  const user = useStore(state => state.user)

  const [open, setOpen] = useState(false)
  const logoutHandler = async () => {

    await authService.logout()
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
              <Typography sx={{fontSize: 16}}>{user.username}</Typography>
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
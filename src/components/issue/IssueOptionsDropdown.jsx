import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Dropdown from '../reusable/Dropdown'
import {
  Button,
  Box,
  Typography,
  IconButton, 
  Menu,
  MenuItem
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIssueButton from './DeleteIssueButton'

const menuStyle={
  borderRadius: 1,
}

const iconStyle = {
  // "&:hover":{color: '#ff5436'}
}

const buttonStyle = {
  height: '30px',
  width: '30px',
  borderRadius: 1,

}

const IssueOptionsDropdown = ({issue}) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { 
    e.stopPropagation()
    setAnchor(e.currentTarget)
  }
  const handleClose = (e) => { 
    e.stopPropagation()
    setAnchor(null) 
  }

  const handleClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Box>
      <IconButton sx={buttonStyle} onClick={handleOpen} >
        <MoreHorizIcon sx={iconStyle}/>
      </IconButton>
      <Menu 
        anchorEl={anchor} 
        open={Boolean(anchor)} 
        onClick={handleClick} 
        onClose={handleClose} 
        PaperProps={{
          elevation: 3,
        }}
      >
        <DeleteIssueButton issue={issue} closeMenu={handleClose}/>
      </Menu>
    </Box>
  )
}

export default IssueOptionsDropdown
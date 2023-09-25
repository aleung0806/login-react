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

import PriorityIcon from '../../reusable/PriorityIcon'

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
  justifyContent: 'space-between',
  
}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'none'
}

const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}


const selections = ['lowest', 'low', 'medium', 'high', 'highest'].reverse()

const PriorityDropdown = ({ issue }) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = async (selection) => {
    document.activeElement.blur()
    await issueService.update(issue.id, {priority: selection})
    handleClose()

  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14' sx={{color: 'rgb(9, 30, 66)'}}>Priority</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          <PriorityIcon priority={issue.priority} />
          <Typography sx={buttonTextStyle}>{issue.priority}</Typography>

        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        {selections
          .map(selection => {
            return (
              <MenuItem key={selection} sx={menuItemStyle} onClick={() => handleSelect(selection)}>
                  <PriorityIcon priority={selection} />
                  <Typography sx={buttonTextStyle}>{selection}</Typography>

              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default PriorityDropdown
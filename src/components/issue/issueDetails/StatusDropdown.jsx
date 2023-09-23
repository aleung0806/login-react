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
  justifyContent: 'flex-end',
  
}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'uppercase'
}

const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}


const selections = ['to do', 'in progress', 'in review', 'done']

const StatusDropdown = () => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }
  const issue = useStore(state => state.issue)
  const handleSelect = async (selection) => {
    await issueService.update(issue.id, {status: selection})
    document.activeElement.blur()
    handleClose()

  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14' sx={{color: 'rgb(9, 30, 66)'}}>Status</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          <Typography sx={buttonTextStyle}> {issue.status}</Typography>

        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {selections
          .map((selection) => {
            return (
              <MenuItem key={selection} sx={menuItemStyle} onClick={() => handleSelect(selection)}>
                  <Typography sx={buttonTextStyle}>{selection}</Typography>

              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default StatusDropdown
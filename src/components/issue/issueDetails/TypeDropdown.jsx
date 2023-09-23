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

import TypeIcon from '../../reusable/TypeIcon'

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

const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}


const selections = ['bug', 'task', 'improvement', 'epic', 'new feature']

const TypeDropdown = ({ issue }) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = async (selection) => {
    document.activeElement.blur()
    await issueService.update(issue.id, {type: selection})
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14'>Type</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          <TypeIcon type={issue.type} />
        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {selections
          .map(selection => {
            return (
              <MenuItem key={selection} sx={menuItemStyle} onClick={() => handleSelect(selection)}>
                  <TypeIcon type={selection} />
              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default TypeDropdown
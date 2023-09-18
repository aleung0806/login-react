import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateIssue } from '../../../reducers/project'

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


const selections = ['lowest', 'low', 'medium', 'high', 'highest'].reverse()

const PriorityDropdown = ({ issue }) => {
  const [anchor, setAnchor] = useState(null)
  const dispatch = useDispatch()

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = (selection) => {
    document.activeElement.blur()
    dispatch(updateIssue({ ...issue, priority: selection }))
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14'>Priority</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          <Typography sx={buttonTextStyle}>{issue.priority}</Typography>
          <PriorityIcon priority={issue.priority} />
        </Button >
      </Box>
      <Menu sx={menuStyle} id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {selections
          .map(selection => {
            return (
              <MenuItem key={selection} sx={menuItemStyle} onClick={() => handleSelect(selection)}>
                  <Typography sx={buttonTextStyle}>{selection}</Typography>
                  <PriorityIcon priority={selection} />
              </MenuItem>
            )
          })}
      </Menu>

    </Box>

  )
}

export default PriorityDropdown
import { useState } from 'react'
import { useStore } from '../../store'
import { issueService } from '../../services/jira'

import {
  IconButton,
  Box,
  Typography,
  Menu,
  MenuItem, 
  Button
} from '@mui/material'

import TypeIcon from '../reusable/TypeIcon'

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const buttonStyle = {
  display: 'flex', 
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: 'fit-content',

}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'none'
}
const iconStyle = {
    marginBottom: '0.5rem',
    height: '24px',
    width: '24px',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    ':hover': {
      color: 'white',
      backgroundColor: '#4C9AFF'
    }
}
const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}
import {ReactComponent as ChevronDown } from '@atlaskit/icon/svgs/chevron-down.svg'

import AtlasIcon from '../reusable/AtlasIcon'

const selections = ['bug', 'task', 'improvement', 'epic', 'new feature', ]

const IssueTypeDropdown = ({type, setType}) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }

  const handleSelect = async (selection) => {
    document.activeElement.blur()
    setType(selection)
    handleClose()
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Button sx={buttonStyle} onClick={handleOpen}>
          <TypeIcon type={type} />
          <Box sx={{marginTop: 0}}>
            <AtlasIcon style={{marginBottom: '0.5rem'}} Svg={ChevronDown} />
          </Box>
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

export default IssueTypeDropdown
import { useState } from 'react'

import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Button
} from '@mui/material'

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const buttonStyle = {
  display: 'flex', 
  gap: 1, 
  justifyContent: 'space-between'
}

const Dropdown = ({ label, menuItems, buttonContents, submit }) => {
  const [anchor, setAnchor] = useState(null)

  const handleOpen = (e) => { setAnchor(e.currentTarget) }
  const handleClose = () => { setAnchor(null) }
  const handleSelect = (selection) => {
    document.activeElement.blur()
    submit(selection)
  }
  return (
    <Box>
      <Box sx={bodyStyle} >
        <Typography variant='darkestBold14'>{label}</Typography>
        <Button sx={buttonStyle} onClick={handleOpen}>
          {buttonContents}
        </Button >
      </Box>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose} PaperProps={{ elevation: 1 }}>
        {tiles.map(Tile => {
          <MenuItem>
            <Tile/>
          </MenuItem>
        })}
      </Menu>
    </Box>

  )
}

export default Dropdown
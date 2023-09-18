import { useState } from 'react'
import { useSelector } from 'react-redux'

import { styled, useTheme } from '@mui/material/styles'
import { 
  Box, 
  Typography,
  IconButton
} from '@mui/material'

import MuiDrawer from '@mui/material/Drawer'

import {ReactComponent as ChevronRight } from '@atlaskit/icon/svgs/chevron-right.svg'
import {ReactComponent as ChevronLeft} from '@atlaskit/icon/svgs/chevron-left.svg'

import AtlasIcon from './reusable/AtlasIcon'


const iconStyle = {
  position: 'relative',
  height: '24px',
  width: '24px',
  right: '10px',
  border: '1px solid #DFE1E6', 
  transform: 'translateX(10px)',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
}

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border: 'none'

})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(3)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(4)} + 1px)`,
  },
  border: 'none'
})

const headerStyle = (theme) => {
  return {
    marginTop: 50,
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  }
}



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    
  }),
)

const SideMenu = () => {
  const projects = useSelector(state => state.projects)
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  const handleDrawer = () => {
      open
        ? handleDrawerClose() 
        : handleDrawerOpen()
  }

  return (
      <Drawer variant="permanent" open={open} sx={{bgcolor: 'blue'}}>
          <Box sx={headerStyle(theme)}>
            <Box  sx={{width: '500px'}}>
              Projects
              {projects.map(project => {
                return (
                <Typography key={project.id}>
                  {project.title}
                </Typography>
                )
              })}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'top', alignItems: 'right', padding: 0, flexWrap: 'nowrap'}}>
              <Box sx={{height: '45px', width: '12px', borderRight: '1px solid #DFE1E6'}}>
              </Box>
              <IconButton onClick={handleDrawer} sx={iconStyle}>
                <AtlasIcon Svg={ open ? ChevronLeft : ChevronRight} />
              </IconButton>
              <Box sx={{height: '1000px', width: '12px', borderRight: '1px solid #DFE1E6'}}>
              </Box>
            </Box>

          </Box>

      </Drawer>
  )
}


export default SideMenu
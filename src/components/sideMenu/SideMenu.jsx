import { useState } from 'react'

import { 
  Box, 
  IconButton,
  Typography
} from '@mui/material'

import {ReactComponent as ChevronRight } from '@atlaskit/icon/svgs/chevron-right.svg'
import {ReactComponent as ChevronLeft} from '@atlaskit/icon/svgs/chevron-left.svg'

import AtlasIcon from '../reusable/AtlasIcon'
import ProjectIcon from '../../icons/project-logo.svg'
import ProjectsList from './ProjectsList'

import Header from './Header'
import Sections from './Sections'

import { useStore } from '../../store'

const drawerStyle = (open) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: '100%',
    width: open ? '240px' : '20px',
    borderRight: '2px solid #DFE1E6',
    backgroundColor: open ? '#f5f5f5' : 'white',
    paddingLeft: open ? '8px' : ''
  }
}

const contentStyle = (open) => {
  return {
    paddingLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    display: open ? 'flex' : 'none',
    width: '100%',
    alignItems: 'flex-start'
  }
}

const iconStyle = (open) => {
  return {
    borderRadius: '50%',
    height: '24px',
    width: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: open ? 'white' : '#6B778C',
    backgroundColor: open ? '#4C9AFF' : 'white',
    ':hover': {
      color: 'white',
      backgroundColor: '#4C9AFF'
    }
  }
}

const pullTabStyle = {
  marginTop: '24px', 
  marginRight: '-22px', 
  width: '44px', 
  height: '40px', 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center', 
  inset: '-8px -12px -8px -8px',
}

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const project = useStore(state => state.project)

  const handleDrawer = () => {
      open
        ? setOpen(false)
        : setOpen(true)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}} >
      <Box sx={drawerStyle(open)} >
          <Box sx={contentStyle(open)}>
            <Header title={project.title}/>
            {/* <Sections project={project}/> */}
            <ProjectsList/>
          </Box>
          <Box sx={pullTabStyle}>
            <IconButton onClick={handleDrawer} sx={iconStyle(open)}>
              <AtlasIcon Svg={ open ? ChevronLeft : ChevronRight} />
            </IconButton>
          </Box>
          {/* <Box sx={{...borderStyle, flex: 4}}/> */}
      
      </Box>
    </Box>
  )
}


export default SideMenu
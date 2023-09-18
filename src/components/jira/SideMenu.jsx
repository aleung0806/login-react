import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material/styles'
import { 
  Box, 
  IconButton,
  Typography
} from '@mui/material'
import {ReactComponent as ChevronRight } from '@atlaskit/icon/svgs/chevron-right.svg'
import {ReactComponent as ChevronLeft} from '@atlaskit/icon/svgs/chevron-left.svg'

import AtlasIcon from './reusable/AtlasIcon'
import ProjectsList from './sideMenu/ProjectsList'

import ProjectIcon from '../icons/project-logo.svg'

import Header from './sideMenu/Header'
import Sections from './sideMenu/Sections'



const SideMenu = ({project}) => {
  const [open, setOpen] = useState(false)


  const handleDrawer = () => {
      open
        ? setOpen(false)
        : setOpen(true)
  }

  const drawerStyle = {
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

    const contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      display: open ? 'flex' : 'none'
    }

    const iconStyle = {
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
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}} >
      <Box sx={drawerStyle} >
          <Box sx={contentStyle}>
            <Header title={project.title}/>
            <Sections project={project}/>
          </Box>
          <Box sx={{ marginTop: '24px', marginRight: '-22px', width: '44px', height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', inset: '-8px -12px -8px -8px'}}>
            <IconButton onClick={handleDrawer} sx={iconStyle}>
              <AtlasIcon Svg={ open ? ChevronLeft : ChevronRight} />
            </IconButton>
          </Box>
          {/* <Box sx={{...borderStyle, flex: 4}}/> */}

      </Box>

    </Box>
  )
}


export default SideMenu
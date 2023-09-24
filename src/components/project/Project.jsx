import styled from "styled-components"
import { DragDropContext } from "react-beautiful-dnd";

import { 
  Typography,
  IconButton,
  Box 
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import DeleteProjectButton from "./DeleteProjectButton"
import ProjectTitle from './ProjectTitle'
import AddListButton from './AddListButton'
import InviteButton from './InviteButton'
import SearchBar from './SearchBar'
import UserIcons from './UserIcons'
import SortByDropdown from './SortByDropdown'
import GroupByDropdown from './GroupByDropdown'
import StarButton from './StarButton'

import List from "../list/List"

import { useParams } from 'react-router-dom'
import dragDrop from '../../utils/dragDrop'
import { useStore } from '../../store'

import { useState } from 'react'
import ProjectOptionsDropdown from "./ProjectOptionsDropdown";

const buttonStyle = {
  height: '35px',
  width: '35px',
  borderRadius: 1,
}

const projectStyle = {
  flex: 100,
  marginTop: '20px',
  marginLeft: '2rem',
  marginRight: '2rem'
}

const userSectionStyle = {
  marginTop: '10px',
  marginBottom: '20px',
  marginLeft: '10px',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '10px'
}

const listAreaStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top'
}
const linkStyle = {
  display: 'flex',
  fontSize: '14px',
  color: 'text.secondary'
}

const Project = ({project}) => {
  console.log('rendering project')

  const onDragEnd = (result) => {
    dragDrop(result)
  }

  return (
    <Box sx={projectStyle}>
      <Box component='main' >

      <Box sx={{display: 'flex', flexDirection: 'row', marginLeft: 0, alignItems: 'center', justifyContent: 'space-between', marginRight: '1rem'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>

          <ProjectTitle project={project}/>

        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1}}>
          <StarButton project={project}/>
          <ProjectOptionsDropdown project={project}/>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={userSectionStyle}>
            <SearchBar project={project}/>
            <UserIcons project={project}/>
            <InviteButton project={project}/>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <GroupByDropdown project={project}/>
          <SortByDropdown project={project}/>
        </Box>
      </Box>
    <Box sx={listAreaStyle}>
        <DragDropContext onDragEnd={onDragEnd} >
            {project.lists !== null && project.lists.map((list) => <List list={list} key={list.id} />)}
        </DragDropContext>
        <AddListButton project={project}/>
      </Box>
    </Box>
    </Box>
  )
}

export default Project;

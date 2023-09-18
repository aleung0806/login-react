import { useState } from 'react'
import { Draggable } from "react-beautiful-dnd"

import {
  Box,
  Typography
} from '@mui/material'

import IssueOptionsDropdown from './issue/IssueOptionsDropdown'
import IssueDetailsButton from './issue/IssueDetailsButton'
import IssueTitle from './issue/IssueTitle'

import TypeIcon from './reusable/TypeIcon'
import InitialsAvatar from './reusable/InitialsAvatar'
import { useSelector } from 'react-redux'



const headerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const footerStyle = {
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'alignItems': 'center',
  'justifyContent': 'space-between'
}

const issueStyle = {
  flexDirection: 'column',
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  background: 'white',
  margin: '0 0 8px 0',
  display: 'grid',
  gridGap: '20px',
  textTransform: 'none',
  fontWeight: 'normal',
}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'none'
}

const avatarStyle = {
  height: '20px', 
  width: '20px', 
  fontSize: '8px'
}

const Issue = ({ issue, index }) => {
  const users = useSelector(state => state.project.users)
  const assignedTo = issue.assigneeId === null 
    ? null
    : users.find(user => user.id === issue.assigneeId)

  return (
    <IssueDetailsButton issue={issue}>
        <Draggable  draggableId={`${issue.id}`} index={index} >
        {(provided, snapshot) => { return (
            <Box sx={issueStyle}
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Box sx={headerStyle}>
                <IssueTitle issue={issue}/>
                <IssueOptionsDropdown issue={issue}/>
              </Box>
              <Box sx={footerStyle}>
                  <TypeIcon type={issue.type}/>
                  <Box sx={{display: 'flex', gap: 1}}>
                  {assignedTo === null
                    ? <Typography sx={buttonTextStyle}>{'not assigned'}</Typography>
                    : <Box>
                        <InitialsAvatar sx={avatarStyle} user={assignedTo} />
                      </Box>
                  }
                  </Box>
              </Box>
            </Box>
        )}}
        </Draggable>
    </IssueDetailsButton>
  )
};

export default Issue

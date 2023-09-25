import { useState } from 'react'
import { Draggable } from "react-beautiful-dnd"

import {
  Box,
  Typography
} from '@mui/material'

import IssueOptionsDropdown from './IssueOptionsDropdown'
import IssueDetails from './IssueDetails'
import IssueTitle from './IssueTitle'

import TypeIcon from '../reusable/TypeIcon'
import PriorityIcon from '../reusable/PriorityIcon'

import InitialsAvatar from '../reusable/InitialsAvatar'
import { useStore } from '../../store'


const headerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const footerStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const leftFooterStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}

const rightFooterStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end'
}


const issueStyle = {
  flexDirection: 'column',
  padding: '0.5rem',
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
  const users = useStore(state => state.project.users)
  const [ mouseOver, setMouseOver ] = useState(false)
  const assignedTo = issue.assigneeId === null 
    ? null
    : users.find(user => user.id === issue.assigneeId)

  return (
    <IssueDetails issueId={issue.id}>
        <Draggable  
          draggableId={`${issue.id}`} 
          index={index} 
        >
        {(provided, snapshot) => { return (
            <Box sx={issueStyle}
            onMouseEnter={() => { setMouseOver(true)}} 
            onMouseLeave={() => {setMouseOver(false)}}
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Box sx={headerStyle}>
                <IssueTitle issue={issue}/>
                { mouseOver && <IssueOptionsDropdown issue={issue}/> } 
              </Box>
              <Box sx={footerStyle}>
                  <Box sx={leftFooterStyle}>
                    {/* <TypeIcon type={issue.type}/> */}
                    <PriorityIcon priority={issue.priority}/>
                  </Box>
                  <Box sx={rightFooterStyle}>
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
    </IssueDetails>
  )
};

export default Issue

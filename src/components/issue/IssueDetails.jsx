
import { 
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  IconButton,
  TextField,
  Modal,
 } from '@mui/material'


import TypeIcon from '../reusable/TypeIcon'


import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as Cross} from '@atlaskit/icon/svgs/cross.svg'
import { useState } from 'react'
import { useStore } from '../../store'
import { issueService } from '../../services/jira'

import PriorityDropdown from './issueDetails/PriorityDropdown'
import TypeDropdown from './issueDetails/TypeDropdown'

import TitleForm from './issueDetails/TitleForm'
import AssignedToDropdown from './issueDetails/AssignedToDropdown'
import DescriptionForm from './issueDetails/DescriptionForm'
import Comments from './issueDetails/Comments'

import d from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'

d.plugin(meridiem)

const dateFormat = (dateString) => {
  const date = new Date(dateString)
  return   d.format(date, 'MMMM D, YYYY [at] h:mm A')

}

const closeButtonStyle = {
  height: '20px',
  width: '20px',
  borderRadius: 0
}

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,

  padding: 3,
  paddingTop: 1,
  gap: 5,

}


const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '1rem'
}

const leftHeaderStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',

}

const leftBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 5
}

const rightBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 3,
  width: '250px'
}

const bodyStyle={
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'space-between',
  
}

const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 'auto'
}

const IssueDetails = ({issueId, children}) => {
  const [showModal, setShowModal] = useState(false)
  const [issue, list, project] = useStore(state => {
    const issue = state.issue
    let list = null
    let project = null

    if (issue !== null){
      project = state.project
      list = project.lists.find(list => list.id === issue.listId)
    }
    
    return [issue, list, project]
  })

  const getIssue = useStore(state => state.getIssue)
  const clickHandler = async () => {
    await getIssue(issueId)
    setShowModal(true)
  }
  const closeHandler = () => {
    setShowModal(false)
  }

return (
  <Box >
    <Box onClick={clickHandler} >
      {children}
    </Box>
    {issue !== null && 
    <Modal open={showModal} onClose = {closeHandler}>
        <Box sx={contentStyle}>
            <Box sx={headerStyle}>
              <Box sx={leftHeaderStyle}>
                <Typography sx={{textTransform: 'none', fontSize: '14px', color: '#5E6C84'}}>
                  {`${project.title} / ${list.title} / ${issue.title} `}
                  </Typography>

              </Box>
              <IconButton sx={{closeButtonStyle}} onClick={closeHandler}>
                <AtlasIcon style={{borderRadius: 0}}Svg={Cross}></AtlasIcon>
              </IconButton>
            </Box>
            
            <Box sx={bodyStyle}>
                <Box sx={leftBodyStyle}>
                  <TitleForm issue={issue} />
                  <DescriptionForm issue={issue}/>
                  <Comments issue={issue}/>

                </Box>
                <Box sx={rightBodyStyle}>
                  <PriorityDropdown issue={issue}/>
                  <AssignedToDropdown issue={issue}/>
                  <TypeDropdown issue={issue}/>

                </Box>
            </Box>
            <Box sx={footerStyle}>
              <Typography variant='faint'>Created {dateFormat(issue.createdAt)}</Typography>
              <Typography variant='faint'>Updated {dateFormat(issue.updatedAt)}</Typography>
            </Box>
          </Box>
    </Modal>
}
  </Box>
)
  }

export default IssueDetails
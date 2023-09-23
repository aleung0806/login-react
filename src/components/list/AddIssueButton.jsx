import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ClickToAdd from '../reusable/ClickToAdd'
import { issueService, listService } from '../../services/jira'
import { useStore } from '../../store'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {  ClickAwayListener } from '@mui/base'
import { 
  Typography,
  Input,
  IconButton,
  Button,
  Box
} from '@mui/material'

import IssueTypeDropdown from './IssueTypeDropdown'

const textAreaStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'white',
  height: '6rem',
  borderRadius: '3px',
  marginRight: 0,
  border: `2px solid #4C9AFF`
}

const inputStyle = {
  paddingLeft: '0.5rem',
  fontSize: '14px',
  border: `2px solid #FFFFFF`,
  backgroundColor: '#FFFFFF',
  '&.Mui-focused': {
    border: `2px solid #FFFFFF`,
    '&&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
}

const buttonStyle = {

  borderRadius: 1,
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start'
  // color: 'secondary.light',
  // "&:hover": {
  //   color: 'text.secondary',
  //   "& .buttonText": {
  //     color: 'text.secondary',

  //   }
  // },
}

const AddIssueButton = ({list, displayButton}) => {
  const user = useStore (state => state.user)

  const [type, setType] = useState('bug')
  const [input, setInput] = useState('')
  const [displayForm, setDisplayForm] = useState(false)

  const displayHandler = () => {
    setDisplayForm(true)
  }
  const inputHandler = (e) => setInput(e.target.value)

  const submitHandler = (e) => {
    if (e) { e.preventDefault() }
    if (input !== ''){ submit(input)}
    setInput('')
    setDisplayForm(false)
  }

  const clickAwayHandler = () => {
    if (input !== ''){ submitHandler() }
    setDisplayForm(false)
  }


  const submit = async (input) => {
    const newIssue = await issueService.create({
      title: input, 
      projectId: list.projectId,
      listId: list.id,
      type: type,
      priority: 'medium',
      status: 'in progress',
      creatorId: user.id
    })
    const issueIds = list.issues.map(issue => issue.id)
    const newIssueOrder = [...issueIds, newIssue.id]
    await listService.update(list.id, {issueOrder: newIssueOrder})
  }
  const ButtonIcon = () => < AddRoundedIcon />

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
    <Box style={{height: 'fit-content', marginRight: 'auto', width: 'auto'}}>
      {!displayForm && displayButton &&
      <Button sx={buttonStyle} onClick={displayHandler} >
            <Box sx={{color: 'rgba(0, 0, 0, 0.54)', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <ButtonIcon sx={{color: 'red'}}/>
            </Box>
            <Typography sx={{marginLeft: '3px', textTransform: 'none', fontSize: '14px', fontWeight: '600', color: 'rgba(0, 0, 0, 0.54)'}}>Create Issue</Typography>
      </Button>
      }
      {displayForm && (
        <Box sx={textAreaStyle}>
          <Box component='form' onSubmit={submitHandler}>
              <Input
                label='What needs to be done?'
                variant='regular'
                sx={inputStyle}
                value={input}
                onChange={inputHandler}
                autoFocus
                placeholder="What needs to be done?"
              />
          </Box>
          <IssueTypeDropdown type={type} setType={setType}/>
        </Box>
      )}
    </Box>
    </ClickAwayListener>
  )
}

export default AddIssueButton
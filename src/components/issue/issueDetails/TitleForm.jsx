import { 
  Box,
 } from '@mui/material'
 import { useStore } from '../../../store'
 import { issueService } from '../../../services/jira'


import ControlledForm from '../../reusable/ControlledForm'

const inputStyle = {
  fontSize: '24px',
  fontWeight: '500',
  border: 'secondary.main',
}

const TitleForm = ({issue}) => {

  const submit = async (input) => {
    await issueService.update(issue.id, {title: input})
  }
  
  return (
    <Box>
      <ControlledForm 
        submit={submit} 
        defaultInput = {issue.title}
        formStyle = {{}}
        inputStyle = {inputStyle}
      />
    </Box>
  )
}

export default TitleForm
import { 
  Typography,
  Box,
 } from '@mui/material'
import ControlledForm from '../../reusable/ControlledForm'
import { useStore } from '../../../store'
import { issueService } from '../../../services/jira'

const inputStyle = {
  font: '12px',
}

const DescriptionForm = ({issue}) => {

  const submit = async (input) => { 
    await issueService.update(issue.id, {description: input})
  }

  return (
    <Box>
      <Typography variant='darkestBold14'>Description</Typography>
      <ControlledForm 
        submit={submit} 
        defaultInput = {issue.description === null ? '' : issue.description}
        formStyle = {{}}
        inputStyle = {inputStyle}
      />
    </Box>
  )
}

export default DescriptionForm
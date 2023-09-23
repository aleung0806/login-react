import { 
  Typography,
  Box,
 } from '@mui/material'
import ControlledForm from '../../reusable/ControlledForm'
import { useStore } from '../../../store'
import { issueService } from '../../../services/jira'

const inputStyle = {

}

const DescriptionForm = ({issue}) => {

  const submit = async (input) => { 
    await issueService.update(issue.id, {description: input})
  }

  return (
    <Box sx={{width: '100%'}}>
      <Typography variant='darkestBold14'>Description</Typography>
      <ControlledForm 
        submit={submit} 
        defaultInput = {issue.description === null ? '' : issue.description}
        formStyle = {{}}
        inputStyle = {inputStyle}
        inputProps = {{
          placeholder: 'Add a description',
          font: '12px',
          

        }}
      />
    </Box>
  )
}

export default DescriptionForm
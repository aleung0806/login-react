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
      <Typography variant='darkestBold14' sx={{color: 'rgb(9, 30, 66)'}}>Description</Typography>
      <ControlledForm 
        submit={submit} 
        defaultInput = {issue.description === null ? '' : issue.description}
        formStyle = {{}}
        inputStyle = {{fontSize: '14px'}}
        inputProps = {{
          placeholder: 'Add a description',       

        }}
      />
    </Box>
  )
}

export default DescriptionForm
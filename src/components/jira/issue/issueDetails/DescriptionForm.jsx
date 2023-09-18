import { 
  Typography,
  Box,
 } from '@mui/material'

import { useDispatch } from 'react-redux'
import { updateIssue } from '../../../reducers/project'
import ControlledForm from '../../reusable/ControlledForm'

const inputStyle = {
  font: '12px',
}

const DescriptionForm = ({issue}) => {
  const dispatch = useDispatch()

  const submit = (input) => { dispatch(updateIssue({ ...issue, description: input })) }

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
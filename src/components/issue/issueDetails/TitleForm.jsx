import { 
  Box,
 } from '@mui/material'

import { useDispatch } from 'react-redux'
import { updateIssue } from '../../../reducers/project'
import ControlledForm from '../../reusable/ControlledForm'

const inputStyle = {
  fontSize: '24px',
  fontWeight: '500',
  border: 'secondary.main',
}

const TitleForm = ({issue}) => {
  const dispatch = useDispatch()

  const submit = (input) => { dispatch(updateIssue({ ...issue, title: input })) }
  
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
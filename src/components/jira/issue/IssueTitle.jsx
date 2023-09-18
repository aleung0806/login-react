import { useDispatch } from 'react-redux'

import { updateIssue } from '../../reducers/project'
import ControlledForm from '../reusable/ControlledForm'

const inputStyle = {
  fontSize: '14px',
  color: 'text.primary',
}

const IssueTitle = ({issue}) => {
  const dispatch = useDispatch()
  const submit = (input) => {
    dispatch(updateIssue({...issue, title: input}))
  }

  return (
    <ControlledForm submit={submit} inputStyle={inputStyle} defaultInput={issue.title}/>

  )
}

export default IssueTitle
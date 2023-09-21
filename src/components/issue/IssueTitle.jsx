import { useStore } from '../../store'
import { issueService } from '../../services/jira'
import ControlledForm from '../reusable/ControlledForm'

const inputStyle = {
  fontSize: '14px',
  color: 'text.primary',
}

const IssueTitle = ({issue}) => {
  const submit = async (input) => {
    await issueService.update(issue.id, {title: input})
  }

  return (
    <ControlledForm submit={submit} inputStyle={inputStyle} defaultInput={issue.title}/>

  )
}

export default IssueTitle
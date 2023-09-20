import ControlledForm from  '../reusable/ControlledForm'
import { listService } from '../../services/jira'
import { useStore } from '../../store'

const inputStyle = {
  fontWeight: 500,
  fontSize: '12px',
  color: 'text.secondary',
  borderColor: 'secondary.light',
}

const ListTitle = ({list}) => {

  const submit = async (input) => {
    await listService.update(list.id, {title: input})
  }

  return (
    <ControlledForm submit={submit} inputStyle={inputStyle} defaultInput={list.title}/>
  )
}

export default ListTitle
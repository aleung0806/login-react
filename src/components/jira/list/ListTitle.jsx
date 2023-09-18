import { useDispatch } from 'react-redux'

import { updateList } from '../../reducers/project'
import ControlledForm from  '../reusable/ControlledForm'

const inputStyle = {
  fontWeight: 500,
  fontSize: '12px',
  color: 'text.secondary',
  borderColor: 'secondary.light',
}

const ListTitle = ({list}) => {
  const dispatch = useDispatch()

  const submit = (input) => {
    dispatch(updateList({...list, title: input}))
  }

  return (
    <ControlledForm submit={submit} inputStyle={inputStyle} defaultInput={list.title}/>
  )
}

export default ListTitle
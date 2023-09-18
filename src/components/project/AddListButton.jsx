import { useDispatch } from 'react-redux'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

import ClickToAdd from '../reusable/ClickToAdd'
import { createList } from '../../reducers/project'

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: 'secondary.light',
  width: '50px',
  height: '50px',
  borderRadius: 1,

}

const AddListButton = ({project}) => {
  const dispatch = useDispatch()

  const submit = (input) => {
    dispatch(createList({ title: input, projectId: project.id }))
  }
  const ButtonIcon = () => < AddRoundedIcon fontSize="large" />

  return (
    <ClickToAdd 
      submit={submit} 
      buttonStyle={buttonStyle} 
      ButtonIcon={ButtonIcon}
    />
  )
}

export default AddListButton
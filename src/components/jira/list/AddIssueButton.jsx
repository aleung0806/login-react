import { useDispatch } from 'react-redux'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

import ClickToAdd from '../reusable/ClickToAdd'
import { createIssue } from '../../reducers/project'

const inputStyle = {
  flexDirection: 'column',
  background: 'white',
  borderColor: 'secondary.light',


}

const buttonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: 1,
  // color: 'secondary.light',
  // "&:hover": {
  //   color: 'text.secondary',
  //   "& .buttonText": {
  //     color: 'text.secondary',

  //   }
  // },
}

const AddIssueButton = ({list}) => {
  const dispatch = useDispatch()

  const submit = (input) => {
    dispatch(createIssue({ 
      title: input, 
      listId: list.id, 
      projectId: list.projectId,
      type: 'bug',
      priority: 'medium',
      status: 'in progress'
    }))
  }
  const ButtonIcon = () => < AddRoundedIcon />

  return (
    <ClickToAdd 
      submit={submit} 
      buttonStyle={buttonStyle} 
      ButtonIcon={ButtonIcon}
      inputStyle={inputStyle}
    />
  )
}

export default AddIssueButton
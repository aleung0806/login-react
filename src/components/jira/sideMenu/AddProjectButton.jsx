import { useDispatch } from 'react-redux'

import { 
  Typography,
  TextField,
  Button,
  Box,
  Modal
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

import { createProject } from '../../reducers/project'
import { fetchAllProjects} from '../../reducers/allProjects'

import ClickToAdd from '../reusable/ClickToAdd'

const buttonStyle = {
  width: '30px',
  height: '30px',
  borderRadius: 1
}

const AddProjectButton = () => {
  const dispatch = useDispatch()

  const submit = (input) => {
    dispatch(createProject({title: input}))
  }

  const ButtonIcon = () => {
    return (
        <AddRoundedIcon />
    )
  }


return (
      <ClickToAdd 
        submit={submit}
        buttonStyle={buttonStyle}
        ButtonIcon={ButtonIcon}
        inputStyle={{}}
      />
)
}

export default AddProjectButton
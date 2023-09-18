import { 
  Button,
  IconButton
} from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const buttonStyle = {
  height: 32,
  width: 32,

  borderRadius: 1,
  color: 'primary.contrast',
  backgroundColor: 'secondary.main'
}


const iconStyle = {
  fontSize: '22px'
}

const AddIssueButton = () => {

  const addHandler = () => {
    // dispatch(createProject({title: 'Super Project'}))
  }

  return (
    <IconButton sx={buttonStyle} onClick = {addHandler}>
      <AddRoundedIcon sx={iconStyle} />
    </IconButton>

  )
}

export default AddIssueButton
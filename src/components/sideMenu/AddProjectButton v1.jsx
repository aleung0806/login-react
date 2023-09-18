
import { 
  Typography,
  TextField,
  Button,
  Box
 } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ModalButton from '../reusable/ModalButton'


const buttonStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'color': 'black',
  'fontWeight': 'normal',
  'textTransform': 'none'
}

const modalContentsStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'absolute',
  padding: 5,
  gap: 5,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
}

const buttonBoxStyle = {
  display: 'flex',
  gap: 2,
}

const headerStyle = {
  'fontWeight': 'bold'
}


const AddProjectModalButton = () => {


return (
  <ModalButton
    buttonContents={
      <Box sx={buttonStyle}>
        <AddRoundedIcon/>
        create project
      </Box>
    }
    modalContents={
      <Box sx={modalContentsStyle}>
        <Typography sx={headerStyle}>Create Project</Typography>
        <TextField
            required
            id="outlined-required"
          />
          <Box sx={buttonBoxStyle}>
            <Button variant="outlined">cancel</Button>
            <Button variant="contained">create</Button>
          </Box>
      </Box>
    }
  >

  </ModalButton >
)
}

export default AddProjectModalButton
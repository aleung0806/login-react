import { 
  Modal,
  Typography,
  IconButton,
  Button,
  Box,
  Input
 } from '@mui/material'
 import { useTheme } from '@mui/material/styles';


import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { createRole } from '../../reducers/project'
import { useState } from 'react'

import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as InviteTeam} from '@atlaskit/icon/svgs/invite-team.svg'
import ControlledForm from '../reusable/ControlledForm'
const modalContentStyle = {
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
  height:300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  padding: 2

}

const buttonBoxStyle = {
  display: 'flex',
  gap: 2
}


const modalDeleteButtonStyle = {
  color: 'primary.contrast',
  backgroundColor: 'secondary.main',
  "&:hover":
    {color: 'secondary.main', borderColor: 'secondary.main'}, 
  fontWeight: '600'
}


const iconStyle = (theme) => {
  return {
    color: theme.palette.grays.medium
  }
}

const buttonStyle = (theme) => {
  return {
    color: theme.palette.grays.light
  }
}
const AddUserButton = ({project}) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const [email, setEmail] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


const inviteHandler = () => {
  dispatch(createRole({userId: 12, projectId: project.id, role: 'member'}))
}


return (
  <Box>
    <IconButton sx={buttonStyle(theme)} onClick={handleOpen}>
      <AtlasIcon sx={iconStyle(theme)} Svg={InviteTeam}/>
    </IconButton>

    <Modal open={open} onClose={handleClose}>
      <Box sx={modalContentStyle}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, padding: 1}}>
          <Typography  align={'center'}>
            Invite
          </Typography>
          <Input
            variant='outlined'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Typography align={'center'}>
            to &nbsp;<strong>{project.title}</strong>&nbsp;
          </Typography>
        </Box>
        <Box sx={buttonBoxStyle}>
          <Button variant="outlined" onClick={handleClose}>cancel</Button>
          <Button sx={modalDeleteButtonStyle} variant="outlined" onClick={inviteHandler}>Invite</Button>
        </Box>
      </Box>
    </Modal>

  </Box>

)
  }

export default AddUserButton
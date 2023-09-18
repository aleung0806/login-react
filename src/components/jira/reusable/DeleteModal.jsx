
import { 
  Modal,
  Button,
  Box
 } from '@mui/material'

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
  height:200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  padding: 2
}

const buttonBoxStyle = {
  display: 'flex',
  gap: 2
}


const deleteButtonStyle = {
  color: 'primary.contrast',
  backgroundColor: '#ff5630',
  borderColor: '#ff5630',
  "&:hover":
    {color: '#ff5630', borderColor: '#ff5630'}, 
  fontWeight: '600'
}

const DeleteModal = ({open, handleClose, Message, handleDelete}) => {

  const handleClick = (e) => {
    e.stopPropagation()
    handleDelete()
  }

  const handleClickAndClose = (e) => {
    e.stopPropagation()
    handleClose()
  }

  return (
      <Modal open={open} onClose={handleClickAndClose } >
        <Box sx={modalContentStyle}>
          <Message/>
          <Box sx={buttonBoxStyle}>
            <Button variant="outlined" onClick={handleClickAndClose }>cancel</Button>
            <Button sx={deleteButtonStyle} variant="outlined" onClick={handleClick} >delete</Button>
          </Box>
        </Box>
      </Modal>
  )
}

export default DeleteModal
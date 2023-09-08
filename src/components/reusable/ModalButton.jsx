import {
  Modal,
  Box,
  Button,
  IconButton
} from '@mui/material'
import { useState } from 'react'

const buttonStyle = {

}

const ModalButton  = ({buttonContents, modalContents}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button sx={buttonStyle} onClick={handleOpen}>
      {buttonContents}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {modalContents}
      </Modal>
    </Box>
  )
}

export default ModalButton
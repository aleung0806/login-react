import {
  Typography,
  TextField,
  Modal,
  Box,
  Divider,
  Button,
  ButtonGroup,
  autocompleteClasses
} from '@mui/material'
import { flexbox } from '@mui/system';


import { useState } from 'react'

const boxStyle = {
  width: 300,
  height: 315,
  backgroundColor: 'white',
  borderRadius: 2,
  margin: 'auto',
  marginTop: 7
};

const tfStyleOne = {
  top: 30,
  left: 50
}

const tfStyleTwo = {
  top: 55,
  left: 50
}

const buttonG = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 11
}

const InviteModal = ({openModal, setOpenModal}) => {
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Box  sx={boxStyle}>
        <Typography
        variant='h4'
        color='primary'
        align='center'
        paddingTop={2}
      >Invite a teamate</Typography>
      <Divider/>
      <TextField sx={tfStyleOne}
          required
          id="outlined-required"
          label="Project"
          defaultValue="Project Name"
        />
      <TextField sx={tfStyleTwo}
          required
          id="outlined-required"
          label="Email"
          defaultValue="example@email.com"
        />
        <ButtonGroup sx={buttonG}>
          <Button variant="text">cancel</Button>
          <Button sx={{"&:hover":{backgroundColor: '#a4ff90'}, fontWeight: '600'}} variant="outlined">send</Button>
        </ButtonGroup>
        
      </Box>
    </Modal>
  )
}

export default InviteModal
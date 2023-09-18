import { useState } from 'react'
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import styled from 'styled-components'

import InviteModal from './InviteModal'

const MenuButtonStyles = styled.span`
  
`;

export default function PeopleDropdown() {
  const navigate = useNavigate()
  const [anchor, setAnchor] = useState(null);
  const [openModal, setOpenModal] = useState(false)

  const handleClick = (e) => {setAnchor(e.currentTarget)}

  const handleClose = () => {setAnchor(null)}


  const handleInviteClick = () => {
    setAnchor(null)
    setOpenModal(true)
  }

  return (
    <MenuButtonStyles>

      <Button id="basic-button" onClick={handleClick} color="secondary">
        People
        <ArrowDropDownRoundedIcon color="secondary"/>
      </Button>
      <Menu id="basic-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem  onClick={handleInviteClick}>invite a teammate</MenuItem>
        <MenuItem  onClick={() => {}}>create team</MenuItem>
      </Menu>
      <InviteModal openModal={openModal} setOpenModal={setOpenModal}/>
    </MenuButtonStyles>

  );
}
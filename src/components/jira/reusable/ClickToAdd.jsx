import { useState } from 'react'

import { 
  Input,
  IconButton,
  Box
 } from '@mui/material'
import {  ClickAwayListener } from '@mui/base'

const ClickToAdd = ({submit, buttonStyle, ButtonIcon, inputStyle, inputProps}) => {
  const [input, setInput] = useState('')
  const [displayForm, setDisplayForm] = useState(false)

  const displayHandler = () => setDisplayForm(true)
  const inputHandler = (e) => setInput(e.target.value)

  const submitHandler = (e) => {
    if (e) { e.preventDefault() }
    if (input !== ''){ submit(input)}
    setInput('')
    setDisplayForm(false)
  }

  const clickAwayHandler = () => {
    if (input !== ''){ submitHandler() }
    setDisplayForm(false)
  }

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
    <Box style={{width: 'fit-content', height: 'fit-content'}}>
      <IconButton sx={buttonStyle} onClick={displayHandler} style={{display: displayForm ? 'none' : ''}}>
            <ButtonIcon/>
      </IconButton>
      <Box style={{display: `${displayForm ? '' : 'none'}`}} component='form' onSubmit={submitHandler}>
        <Input
          variant='regular'
          sx={inputStyle}
          inputProps={inputProps}
          value={input}
          onChange={inputHandler}
          autoFocus
        />
      </Box>
    </Box>
    </ClickAwayListener>
  )
}

export default ClickToAdd
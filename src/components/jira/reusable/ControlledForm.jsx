import { useState } from 'react'
import { 
  Input,
  Box,
 } from '@mui/material'


const ControlledForm = ({defaultInput, submit, formStyle, inputStyle, inputProps}) => {
  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => { setInput(e.target.value) }
  const handleClick = (e) => { e.stopPropagation() }
  const handleSubmit = (e) => {
    e.preventDefault()
    document.activeElement.blur()    
    submit(input)
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={formStyle} onClick={handleClick}>
      <Input
        variant='regular'
        sx={inputStyle}
        inputProps={inputProps}
        value={input}
        onChange={handleChange}
      />
    </Box>
  )
}

export default ControlledForm
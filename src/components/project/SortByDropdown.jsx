import { useState } from 'react'

import { 
  Box,
  MenuItem, 
  FormControl, 
  Select,
  Typography
} from '@mui/material'

const dropdownStyle = {
  fontSize: '12px',
  height: '30px',
  width: '100px'
}                                                                                                                             


const SortByDropdown = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, paddingRight: '20px'}}>
    <Typography sx={{fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: 'primary.light'}}>
      Sort by
    </Typography>
      <FormControl >
        <Select
          sx={dropdownStyle} 
          value={value}
          onChange={handleChange}
        >
          <MenuItem sx={dropdownStyle} value={'priority'}>Priority</MenuItem>
          <MenuItem sx={dropdownStyle} value={'date assigned'}>Date due</MenuItem>
          <MenuItem sx={dropdownStyle} value={'dueDate'}>Date assigned</MenuItem>

        </Select>
      </FormControl>
    </Box>
  )
}

export default SortByDropdown
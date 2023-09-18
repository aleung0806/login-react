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


const GroupByDropdown = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, paddingRight: '20px'}}>
    <Typography sx={{fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: 'primary.light'}}>
      Group by
    </Typography>
      <FormControl >
        <Select
          sx={dropdownStyle} 
          value={value}
          onChange={handleChange}
        >
          <MenuItem sx={dropdownStyle} value={'type'}>List</MenuItem>
          <MenuItem sx={dropdownStyle} value={'priority'}>Assigned to</MenuItem>
          <MenuItem sx={dropdownStyle} value={'date assigned'}>Status</MenuItem>
          <MenuItem sx={dropdownStyle} value={'dueDate'}>Type</MenuItem>

        </Select>
      </FormControl>
    </Box>
  )
}

export default GroupByDropdown
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
  const [value, setValue] = useState('list')

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
          <MenuItem sx={dropdownStyle} value={'list'}>List</MenuItem>
          <MenuItem sx={dropdownStyle} value={'status'}>Status</MenuItem>


        </Select>
      </FormControl>
    </Box>
  )
}

export default GroupByDropdown
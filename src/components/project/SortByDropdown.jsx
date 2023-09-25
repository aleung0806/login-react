import { useState } from 'react'
import { useStore } from '../../store'
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

  const sort = useStore(state => state.sort)
  const setSort = useStore(state => state.setSort)


  const handleChange = (e) => {
    setSort(e.target.value)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, paddingRight: '20px'}}>
    <Typography sx={{fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: 'primary.light'}}>
      Sort by
    </Typography>
      <FormControl >
        <Select
          sx={dropdownStyle} 
          value={sort}
          onChange={handleChange}
        >
          <MenuItem sx={dropdownStyle} value={'list order'}>List order</MenuItem>
          <MenuItem sx={dropdownStyle} value={'priority'}>Priority</MenuItem>
          <MenuItem sx={dropdownStyle} value={'created at'}>Date created</MenuItem>
          <MenuItem sx={dropdownStyle} value={'created at'}>Date updated</MenuItem>
          <MenuItem sx={dropdownStyle} value={'date due'}>Date due</MenuItem>

        </Select>
      </FormControl>
    </Box>
  )
}

export default SortByDropdown
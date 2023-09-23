import { useState } from 'react'
import { useStore } from '../../../store'
import { issueService } from '../../../services/jira'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import {
  Box,
  Typography,
  Menu,
  MenuItem, 
  Button
} from '@mui/material'

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: 'auto',
}

const buttonStyle = {
  display: 'flex', 
  gap: 1, 
  justifyContent: 'space-between'
}

const buttonTextStyle = {
  fontSize: '12px', 
  textTransform: 'none'
}

const avatarStyle = {
  height: '20px', 
  width: '20px', 
  fontSize: '8px'
}

const menuStyle = {}

const menuItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontWeight: 'normal',
  gap: 1
}

const DateDuePicker = ({ issue }) => {
  const [value, setValue] = useState(dayjs('2022-04-17'))
 
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography variant='darkestBold14' sx={{color: 'rgb(9, 30, 66)'}}>Date due</Typography>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{width: '150px'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
          </LocalizationProvider>
    </Box>
  </Box>
  )
}

export default DateDuePicker
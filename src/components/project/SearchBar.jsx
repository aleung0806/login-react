import { 
  TextField,
  Box,
  InputAdornment,
 } from '@mui/material'

import AtlasIcon from '../reusable/AtlasIcon'
import {ReactComponent as Search} from '@atlaskit/icon/svgs/search.svg'
import { useState } from 'react'

const inputStyle = {
  height: '2.5rem',
  padding: '10px',
  borderWidth: '2px',
  borderColor: '#DFE1E6',
  borderRadius: '3px',
  fontSize: '14px',
  width: '100px',
}
  
const iconStyle = {
  fontSize: 'medium',
  color: 'primary.light',
  margin: 0,
}

const SearchBar = ({project}) => {

  const [input, setInput] = useState('')
  const [focused, setFocused] = useState(false)

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <Box>
        <TextField
            sx={{
              '.Mui-focused': {
                width: '200px'
              }
            }}
            InputProps={{
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),

              sx : inputStyle,
              startAdornment: (
                <InputAdornment position='start'>
                  <AtlasIcon sx={iconStyle} Svg={Search}/>
                </InputAdornment>
              ),
              placeholder: focused ? 'Search this board' : ''

            }}
            id="searchField"
            value={input}
            onChange={changeHandler}
            
          >
      </TextField>
    </Box>
  )
}

export default SearchBar
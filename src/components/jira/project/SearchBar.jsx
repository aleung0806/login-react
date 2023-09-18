import { 
  TextField,
  Box,
  InputAdornment,
 } from '@mui/material'

 import AtlasIcon from '../reusable/AtlasIcon'
 import {ReactComponent as Search} from '@atlaskit/icon/svgs/search.svg'
import { useState } from 'react'

const textFieldStyle = {
  height: '40px',
  padding: '10px',
  borderWidth: '3px',
  fontSize: '14px',
  width: '100px'
}

const iconStyle = {
  fontSize: 'medium',
  color: 'primary.light',
  margin: 0,
}

const SearchBar = ({project}) => {

  const [input, setInput] = useState(project.title)


  const changeHandler = () => {
  }

  return (
    <Box>
        <TextField
            InputProps={{
              style : textFieldStyle,
              startAdornment: (
                <InputAdornment position='start'>
                  <AtlasIcon sx={iconStyle} Svg={Search}/>
                </InputAdornment>
              ),

            }}
            id="searchField"
            value=''
            onChange={changeHandler}
          >
      </TextField>
    </Box>
  )
}

export default SearchBar
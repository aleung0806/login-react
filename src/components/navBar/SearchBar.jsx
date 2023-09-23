import { 
  TextField,
  Box,
  InputAdornment,
 } from '@mui/material'

 import AtlasIcon from '../reusable/AtlasIcon'
 import {ReactComponent as Search} from '@atlaskit/icon/svgs/search.svg'


const textFieldStyle = {
  height: '30px',
  padding: '10px',
  borderWidth: '3px',
  fontSize: '14px',
  borderWidth: '2px',
  borderColor: '#DFE1E6',
  borderRadius: '3px',
  
}

const iconStyle = {
  fontSize: 'medium',
  color: 'primary.light',
  margin: 0,
}

const SearchBar = () => {

  const searchHandler = () => {
  }

  const changeHandler = () => {
  }

  return (
    <Box>
        <TextField
           sx={{
            '.Mui-focused': {
              width: '400px',
              borderColor: '#4C9AFF'
            }
          }}
            InputProps={{
              style : textFieldStyle,
              startAdornment: (
                <InputAdornment position='start'>
                  <AtlasIcon sx={iconStyle} Svg={Search}/>
                </InputAdornment>
              ),
              placeholder: 'Search'

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
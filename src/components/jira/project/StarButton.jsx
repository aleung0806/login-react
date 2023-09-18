import { useDispatch } from 'react-redux'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import Checkbox from '@mui/material/Checkbox'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import ClickToAdd from '../reusable/ClickToAdd'
import { createList } from '../../reducers/project'
import { useState } from 'react'



const StarButton = () => {
  const [starred, setStarred] = useState(false)

  const changeHandler = () => {
    setStarred(!starred)
  }

  return (
      <Checkbox  sx={{borderRadius: 1}}
        icon={<StarIcon sx={{color: 'rgb(255, 171, 0)'}}/>} 
        checkedIcon={<StarBorderIcon sx={{}}/>} 
        checked={starred}
        onChange={changeHandler}
      />
  );
}

export default StarButton
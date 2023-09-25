import AddRoundedIcon from '@mui/icons-material/AddRounded'
import Checkbox from '@mui/material/Checkbox'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import ClickToAdd from '../reusable/ClickToAdd'
import { useState } from 'react'
import { userService } from '../../services'
import { useStore } from '../../store'

const StarButton = () => {
  const user = useStore(state => state.user)
  const project = useStore(state => state.project)

  const [starred, setStarred] = useState((() => {

    return user.favoriteProject !== project.id
  })())
  
  const changeHandler = async () => {
    console.log(project.id)
    console.log({favoriteProject: project.id})
    await userService.update(user.id, {favoriteProject: project.id})

    //setStarred(!starred)
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
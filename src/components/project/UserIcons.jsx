
import { red, purple, teal } from '@mui/material/colors'
import {
  Box,
  IconButton,
  Button,
  AvatarGroup
} from '@mui/material'
import InitialsAvatar from '../reusable/InitialsAvatar'
import { useState } from 'react'
const avatarStyles = {
  height: 30,
  width: 30,
  fontSize: '12px'
}

const iconButtonStyle = (selection) => {
  return 
}
import { useStore } from '../../store'
const UserIcons = ({project}) => {
  const users = project.users

  const [selectMap, setSelectMap] = useState((() => {
    const map = {}
    users.forEach(user => {
      map[user.id] = false
    })
    return map
  })())
  
  const setUserFilter = useStore(state => state.setUserFilter)

  const handleClick = (id) => {
    const updatedSelectMap = {...selectMap}
    updatedSelectMap[id] = !selectMap[id]

    setSelectMap(updatedSelectMap)
    setUserFilter(updatedSelectMap)
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
      {users !== null && 
        users.map((user) => {
          return (
          <IconButton  sx={{ 
            padding: 0, 
            outlineOffset: '1px',
            outline: selectMap[user.id] ?  'solid 2px #0052cc' : 'none'

          }} key={user.id}  onClick={() => handleClick(user.id)}>
            <InitialsAvatar sx={avatarStyles} user={user} /> 
          </IconButton>
          )
          })
      }
    </Box>
  )
}

export default UserIcons
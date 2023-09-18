
import { useSelector } from 'react-redux'
import { red, purple, teal } from '@mui/material/colors'
import {
  AvatarGroup
} from '@mui/material'
import InitialsAvatar from '../reusable/InitialsAvatar'

const avatarStyles = {
  height: 30,
  width: 30,
  fontSize: '12px'
}

const UserIcons = ({project}) => {
  const users = project.users
  return (
    <AvatarGroup max={4}>
      {users !== null && 
        users.map((user) => {
          return (
            <InitialsAvatar key={user.id} sx={avatarStyles} user={user} /> 
          )
        })
      }
    </AvatarGroup>
  )
}

export default UserIcons
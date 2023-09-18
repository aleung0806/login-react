import {
  Avatar,
  useTheme,
} from '@mui/material'
import { findByLabelText } from '@testing-library/react'

const InitialsAvatar = ({sx, user}) => {
  const theme = useTheme()

  function stringToColor(string) {
    const hash = string.charCodeAt(1)    
    return Object.values(theme.palette.colors)[hash % 5]
  }

  const avatarStyles = () => {
   
    return {
      sx: {
        ...sx,
        backgroundColor: stringToColor(user.username),
        fontWeight: '600'
      },
      children: `${user.username.charAt(0)}`,
    }
  }

  return (
    <Avatar {...avatarStyles(name)} />
  )
}

export default InitialsAvatar

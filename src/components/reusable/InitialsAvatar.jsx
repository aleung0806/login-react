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
    const first = user.firstName
    const last = user.lastName
    return {
      sx: {
        ...sx,
        backgroundColor: stringToColor(first),
        fontWeight: '600'
      },
      children: `${first.charAt(0)}${last.charAt(0)}`,
    }
  }

  return (
    <Avatar {...avatarStyles(name)} />
  )
}

export default InitialsAvatar

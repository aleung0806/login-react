import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { login, logout, register, fetchUser } from 'reducers/auth'
import { useState, useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'email-validator'

import jiraLogo from 'icons/jira-logo.svg'
import atlassianLogoGray from 'icons/atlassian-logo-gray.svg'
import { ReactComponent as EditFilledIcon } from '@atlaskit/icon/svgs/edit-filled.svg'
import { ReactComponent as WatchIcon } from '@atlaskit/icon/svgs/watch.svg'
import { ReactComponent as WatchIconFilled } from '@atlaskit/icon/svgs/watch-filled.svg'


import { 
  TextField,
  Input,
  Box,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton
} from '@mui/material'


const Footer = () => {
  return (
    <Box sx={{width: "320px", borderTop: "1px solid rgb(193, 199, 208)", paddingTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box 
        component="img"
        height="24px"
        src={atlassianLogoGray}
      />
      <Box sx={{display: "flex", flexDirection: "row", paddingTop: "8px"}}>
        <Typography sx={{color: "rgb(23, 43, 77)", fontSize: "11px", }}>
          Jira clone made by 
        </Typography>
        <Link 
          variant="body"
          sx={{fontSize: "11px", paddingLeft: "4px"}}
          href=""
        >
          aleung0806@github.com
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
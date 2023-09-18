import { useState, useEffect } from 'react'
import jiraLogo from 'icons/jira-logo.svg'
import { useCookies } from 'react-cookie';

import { useStore } from '../../store'
import userService from '../../services/user'

import { 
  TextField,
  Input,
  Button,
  Box,
  Typography,
  Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useLoggedInUser } from 'hooks/useLoggedInUser'


const TestInfo = () => {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log('rendering TestInfo')
  const user = useStore((state) => state.user)
  const login = useStore(state => state.login)
  const logout = useStore((state) => state.logout)
  const verifySession = useStore(state => state.verifySession)


  const allUsers = useStore((state) => state.allUsers)
  const getAllUsers = useStore((state) => state.getAllUsers)

  const [cookies, setCookie, removeCookie] = useCookies();

  const loginTurkey= async () => {
    await login('testerturkey@gmail.com', 'password')
  }

  const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '1rem',
    testTransform: 'none',
    gap: 5,
  }

  const linkStyle = {
    cursor: 'pointer'
  }

  const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '1rem',
    testTransform: 'none'
  }

  const adminInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '1rem',
    testTransform: 'none'
  }

  useEffect(() => {

  }, [allUsers])

  return (
    <Box sx={containerStyle}>
      <Typography>
        Authentication
      </Typography>
      <Box sx={userInfoStyle}>
        <button onClick={loginTurkey}>log in as turkey</button>
        <button sx={linkStyle} onClick={logout}>log out</button>
        <button sx={linkStyle} onClick={verifySession}>verifySession</button>
        <pre>
          Logged in user is: {JSON.stringify(user, null, 2)}
        </pre>
      </Box>
      <Typography>
        Admin
      </Typography>
      <Box sx={adminInfoStyle}>
        <Typography>User</Typography>
        <form>
          <label>id</label> <input value={id} onChange={(e)=> setId(e.target.value)}/>
        </form>
        <form>
          <label>email</label> <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </form>
        <form>
          <label>password</label> <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </form>
        <button onClick={() => userService.create({email, password, username: email})}>create</button>

        <button onClick={() => userService.getById(id)}>get by id</button>
        <button onClick={() => userService.updateById(id, {email, password})}>update by id</button>
        <button onClick={() => userService.removeById(id)}>remove by id</button>


        <button onClick={userService.removeAll} >remove all</button>

        <button onClick={getAllUsers}>get all </button>
        <pre>
          {JSON.stringify(allUsers, null, 2)}
        </pre>
      </Box>
    </Box>
  )
}

export default TestInfo
import { useState, useEffect } from 'react'


import { useStore } from '../../store'
import { userService }from '../../services'

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

const adminInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1rem',
  testTransform: 'none'
}
const User = () => {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const allUsers = useStore((state) => state.allUsers)
  const getAllUsers = useStore((state) => state.getAllUsers)
  return (
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
      <button onClick={() => userService.getById(id)}>get</button>
      <button onClick={() => userService.updateById(id, {email, password})}>update</button>
      <button onClick={() => userService.removeById(id)}>remove</button>

      <button onClick={userService.removeAll} >remove all</button>
      <button onClick={getAllUsers}>get all </button>
      <pre>
        {JSON.stringify(allUsers, null, 2)}
      </pre>
    </Box>
  )
}

export default User
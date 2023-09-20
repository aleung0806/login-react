import { useState} from 'react'


import { useStore } from '../../store'
import { userService }from '../../services'

import { 
  Box,
  Typography,
} from '@mui/material'

const containerStyle = {
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
    <Box sx={containerStyle}>
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
      <button onClick={() => userService.get(id)}>get</button>
      <button onClick={() => userService.update(id, {email, password})}>update</button>
      <button onClick={() => userService.remove(id)}>remove</button>

      <button onClick={userService.removeAll} >remove all</button>
      <button onClick={getAllUsers}>get all </button>
      <pre>
        {JSON.stringify(allUsers, null, 2)}
      </pre>
    </Box>
  )
}

export default User
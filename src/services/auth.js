import axios from 'axios'

const api  = axios.create({
  baseURL: "http://localhost:3001/v1"
})
const login = async (email, password) => {
  const response = await api.post('/login', {email, password})
  return response.data
}

const verify = async () => {
  const response = await api.get('/verify')
  return response.data === '' ? null : response.data
}

const logout = async () => {
  const response = await api.post('/logout')
  if (response.status === 200){
    return response.data
  }else {
    throw new Error()
  }
}

const register = async (email, password) => {
  const response = await api.post('/register', {email: email, password: password, username: email})
  return response.data
}


export default {
  login,
  verify,
  logout,
  register,
}
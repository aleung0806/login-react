import axios from 'axios'
import { addDebugInterceptor }from './interceptors';

const api  = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true
})

addDebugInterceptor(api)

const login = async (email, password) => {
  const response = await api.post('/login', {email, password})
  if (response.status === 200){
    return response.data
  }
  return null
}

const verifySession = async () => {
  const response = await api.get('/verify')
  if (response.status === 200){
    return response.data
  }
  return null
}

const refreshSession = async () => {
  const response = await api.get('/refresh')
  if (response.status === 200){
    return response.data
  }
  return null
}

const logout = async () => {
  const response = await api.post('/logout')
  if (response.status === 200){
    return response.data
  }
  return null
}

const register = async (email, password) => {
  console.log('sending register')
  const response = await api.post('/register', {email: email, password: password, username: email})
  if (response.status === 201){
    return response.data
  }
  return null
}


export default {
  login,
  logout,
  register,
  verifySession,
  refreshSession
}
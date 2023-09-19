import axios from 'axios'
import addDebugInterceptor from './interceptors';


const api  = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true
})

addDebugInterceptor(api)

const path = '/users'

export const create = async (element) => {
  const response = await api.post(path, element)
  if (response.status === 201){
    return response.data
  }
  return null
}

export const get = async (id) => {
  const response = await api.get(`${path}/${id}`)
  if (response.status === 200){
    return response.data
  }
  return null
}

export const getAll = async () => {
  const response = await api.get(path)
  if (response.status === 200){
    return response.data
  }
  return null  
}

export const update = async (id, element) => {
  const response = await api.push(`${path}/${id}`, element)
  if (response.status === 200){
    return response.data
  }
  return null  
}

export const remove = async (id) => {
  const response = await api.delete(`${path}/${id}`)
  if (response.status === 204){
    return response.data
  }
  return null  
}

export const removeAll = async (id) => {
  const response = await api.delete(path)
  if (response.status === 204){
    return response.data
  }
  return null  
}

import axios from 'axios'
import addDebugInterceptor from './interceptors';

const actions = ['getById', 'getAll', 'create', 'update', 'remove']
const resources = ['project', 'list', 'issue', 'role']

const api  = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true 
})

addDebugInterceptor(api)

export const customService = (path) => {
  
  const create = async (element) => {
    const response = await api.post(path, element)
    if (response.status === 201){
      return response.data
    }
    return null
  }
  
  const get = async (id) => {
    const response = await api.get(`${path}/${id}`)
    if (response.status === 200){
      return response.data
    }
    return null
  }

  const getAll = async () => {
    const response = await api.get(path)
    if (response.status === 200){
      return response.data
    }
    return null  }
  
  const update = async (id, element) => {
    const response = await api.push(`${path}/${id}`, element)
    if (response.status === 200){
      return response.data
    }
    return null  }
  
  const remove = async (id) => {
    const response = await api.delete(`${path}/${id}`)
    if (response.status === 204){
      return response.data
    }
    return null  
  }

  const removeAll = async (id) => {
    const response = await api.delete(path)
    if (response.status === 204){
      return response.data
    }
    return null  
  }

  return {
    create,
    get,
    getAll,
    update,
    remove,
    removeAll
  }
  
}
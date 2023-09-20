import axios from 'axios'
import { addDebugInterceptor }from './interceptors';
import { useStore } from '../store'
const actions = ['getById', 'getAll', 'create', 'update', 'remove']
const resources = ['project', 'list', 'issue', 'role']

const api  = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true 
})

addDebugInterceptor(api)


const callGetProject = async () => {
  const { project, getProject } =  useStore.getState()
  if (project !== null){
    await getProject(project.id)
  }
}

export const customService = (path) => {
  
  const create = async (element) => {
    const response = await api.post(path, element)
    if (response.status === 201){
      callGetProject()
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
      callGetProject()
      return response.data
    }
    return null  
  }
  
  const update = async (id, element) => {
    const response = await api.patch(`${path}/${id}`, element)
    if (response.status === 200){
      callGetProject()
      return response.data
    }
    return null  }
  
  const remove = async (id) => {
    const response = await api.delete(`${path}/${id}`)
    if (response.status === 204){
      callGetProject()
      return response.data
    }
    return null  
  }

  const removeAll = async (id) => {
    const response = await api.delete(path)
    if (response.status === 204){
      callGetProject()  
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
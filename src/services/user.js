import axios from 'axios'
import addDebugInterceptor from './interceptors';

const api  = axios.create({
  baseURL: "http://localhost:3001/v1",
  withCredentials: true
})

addDebugInterceptor(api)


//individual
const create = async (element) => {
  const response = await api.post(`/users`, element)
  return response.data
}

const getById = async (id) => {
  const response = await api.get(`/users/${id}`)
  return response.data
}

const updateById = async (id, element) => {
  const response = await api.push(`/users/${id}`, element)
  return response.data
}

const removeById = async (id) => {
  const response = await api.delete(`/users/${id}`)
  return response.data
}

//all
const getAll = async () => {
  const response = await api.get(`/users`)
  return response.data //check response codes for errors. do the same in auth
}

const removeAll = async () => {
  const response = await api.delete(`/users`)
  return response.data
}






export default {
  create,
  getById,
  updateById,
  removeById,
  getAll,
  removeAll
}
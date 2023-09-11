import axios from 'axios'

const api  = axios.create({
  baseURL: "http://localhost:3001/v1/users",
  withCredentials: true
})

//individual
const create = async () => {
  const response = await api.post(`/`)
  return response.data
}

const getById = async (id) => {
  const response = await api.get(`/${id}`)
  return response.data
}

const updateById = async (id, element) => {
  const response = await api.push(`/${id}`, element)
  return response.data
}

const removeById = async (id) => {
  const response = await api.delete(`/${id}`)
  return response.data
}

//all
const getAll = async () => {
  const response = await api.get(`/`)
  return response.data //check response codes for errors. do the same in auth
}

const removeAll = async () => {
  const response = await api.delete(`/`)
  return response.data
}






export default {
  create,
  getById,
  updateById,
  removeById,
  getAll,
  deleteAll
}
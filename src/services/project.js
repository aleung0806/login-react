import axios from 'axios'
axios.defaults.withCredentials = true

const baseUrl = '/project'

const create = async (element) => {
  const response = await axios.post(baseUrl, element)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const getByUser = async () => {
  console.log('getByUser in projectService')
  const response = await axios.get(`${baseUrl}`)
  console.log('getByUser', response.data)
  return response.data
}

const update = async (id, element) => {
  const response = await axios.push(`${baseUrl}/${id}`, element)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default {
  create,
  get,
  getByUser,
  update,
  remove
}
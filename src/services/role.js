import axios from 'axios'

const baseUrl = 'role'

const create = async (element) => {
  const response = await axios.post(baseUrl, element)
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
  update,
  remove
}
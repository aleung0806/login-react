import axios from 'axios'

const baseUrl = 'user'

const get = async () => {
  const response = await axios.get(`/${baseUrl}`)
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
  get,
  update,
  remove
}
import axios from 'axios'

const baseUrl = 'issue'

const create = async (element) => {
  const response = await axios.post(baseUrl, element)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const update = async (id, element) => {
  const response = await axios.push(`${baseUrl}/${id}`, element)
  return response.data
}

const remove = async (element) => {
  const response = await axios.delete(`${baseUrl}/${element.id}`, element)
  return response.data
}

export default {
  create,
  get,
  update,
  remove
}
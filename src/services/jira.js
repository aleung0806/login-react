import { customService } from './custom'
import axios from 'axios'
import { addDebugInterceptor }from './interceptors';
import { useStore } from '../store'

const api  = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true 
})

addDebugInterceptor(api)


export const projectRoleService = customService('/projectRole')

export const projectService = customService('/project')
export const listService = customService('/list')
export const issueService = customService('/issue')


export const commentService = customService('/comment')

const callGetIssue = async () => {
  const { issue, getIssue} =  useStore.getState()
  if (issue !== null){
    await getIssue(issue.id)
  }
}


commentService.create =   async (element) => {
  const response = await api.post('/comment', element)
  if (response.status === 201){
    callGetIssue()
    return response.data
  }
  return null
}
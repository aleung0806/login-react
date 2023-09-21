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
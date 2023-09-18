import { create } from 'zustand'
import authService from '../services/auth'
import userService from '../services/user'

const defaultProject = {
  id: 1,
  title: 'project 1 title',
  lists: [
    {
      id: 1,
      title: 'list 1',
      projectId: 1

    },
    {
      id: 2,
      title: 'list 2',
      projectId: 1,
      issues: [
        {

        }
      ]
    },
    {
      id: 3,
      title: 'list 3',
      projectId: 1
    }
  ]
}

const defaultProjects = [
  {
    id: 1,
    title: 'project 1 title'
  },
  {
    id: 2,
    title: 'project 2 title'
  }
]
  
export const jiraSlice = (set, get) => ({
    project: {},
    projects: defaultProjects,
  
    setProjects: async () => {

    },
    setProject: async () => {

    }
  
  })
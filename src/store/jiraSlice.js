import { create } from 'zustand'
import { projectService, projectRoleService } from '../services/jira'

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
  project: null,
  projects: [],
  projectRoles: [],
  getAllProjects: async () => {
    const projects = await projectService.getAll()
    set({projects: projects})
  },

  getProject: async (id) => {
    const project = await projectService.get(id)
    console.log('setting project', id)
    set({project: project})
  },

  getAllProjectRoles: async () => {
    const projectRoles = await projectRoleService.getAll()
    set({projectRoles: projectRoles})
  },
})
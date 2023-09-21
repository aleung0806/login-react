import { create } from 'zustand'
import { projectService, projectRoleService } from '../services/jira'

const defaultProject = {
  id: 'default',
  title: 'example project',
  lists: [],
  users: []
}



export const jiraSlice = (set, get) => ({
  project: null,
  projects: [],
  projectRoles: [],
  setDefaultProject: async () => {
    set({project: defaultProject})

  },
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
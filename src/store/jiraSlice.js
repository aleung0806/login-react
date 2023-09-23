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
  issueSearch: '',
  issueSort: '',
  issueGroup: 'list',

  setDefaultProject: async () => {
    set({project: defaultProject})

  },
  getAllProjects: async () => {
    const projects = await projectService.getAll()
    set({projects: projects})
  },

  getProject: async (id) => {
    const project = await projectService.get(id)
    set({project: project})
  },

  getAllProjectRoles: async () => {
    const projectRoles = await projectRoleService.getAll()
    set({projectRoles: projectRoles})
  },

  setIssueSearch: async (issueSearch) => {
    set({issueSearch: issueSearch})
  },
})
import { create } from 'zustand'
import { issueService, projectService, projectRoleService } from '../services/jira'
import { sortIssues, searchIssues} from '../utils/processIssues'

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
  issue: null,

  search: '',
  sort: 'list order',
  group: 'none',
  processedProject: null,


  setDefaultProject: async () => {
    set({project: defaultProject})

  },
  setProject: async (project) => {
    set({project: project})
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

  getIssue: async (id) => {
    const issue = await issueService.get(id)
    set({issue: issue})
  },

  setSearch: async (search) => {
    set({search: search})
  },

  setSort: async (sort) => {
    console.log('setSort')
    set({sort: sort})
    const project = get().project

    if (sort === 'list order'){
      const fetchedProject = await projectService.get(project.id)
      set({project: fetchedProject})
    
    }else{
      const sortedLists = project.lists.map(list => {
        const sortedIssues = sortIssues(sort, list.issues)
        return {
          ...list,
          issues: sortedIssues,
        }
      })

      set({project: {
        ...project, 
        lists: sortedLists
      }})
    }
  },
})
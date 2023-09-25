import { create } from 'zustand'
import { issueService, projectService, projectRoleService } from '../services/jira'
import { applyUserFilter, sortIssues, searchIssues} from '../utils/processIssues'

const defaultProject = {
  id: 'default',
  title: 'example project',
  lists: [],
  users: []
}



export const jiraSlice = (set, get) => ({
  unfilteredProject: null,
  project: null,
  projects: [],
  projectRoles: [],
  issue: null,

  search: '',
  sort: 'list order',
  group: 'none',
  userFilter: null,


  setDefaultProject: async () => {
    //set({project: defaultProject})

  },
  setProject: async (project) => {

    set({project: project})
    set({unfilteredProject: project})

  },
  getAllProjects: async () => {
    const projects = await projectService.getAll()
    set({projects: projects})
  },

  getProject: async (id) => {
    const project = await projectService.get(id)
    set({project: project})
    set({unfilteredProject: project})

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
    const project = get().unfilteredProject

    if (search === ''){
      set({project: project})
    }else{
      const searchedLists = project.lists.map(list => {
        const searchedIssues = searchIssues(search, list.issues)
        return {
          ...list,
          issues: searchedIssues,
        }
      })
      set({project: {
        ...project, 
        lists: searchedLists
      }})
    }
  },

  setUserFilter: async (userFilter) => {
    set({userFilter: userFilter})
    const project = get().unfilteredProject

    if (Object.values(userFilter).findIndex(user => user) === -1){
      return set({project: project})
    }
    console.log(project)
    const filteredLists= project.lists.map(list => {
      const filteredIssues = applyUserFilter(userFilter, list.issues)
      return {
        ...list,
        issues: filteredIssues,
      }
    })

    set({project: {
      ...project, 
      lists: filteredLists
    }})
  },
  setSort: async (sort) => {
    set({sort: sort})
    const project = get().unfilteredProject

    if (sort === 'list order'){
      set({project: project})
    
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
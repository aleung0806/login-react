import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './reducers/project'
import allProjectsReducer from './reducers/allProjects'

import authReducer from './reducers/auth'

const store = configureStore({
  reducer: {
    project: projectReducer,
    allProjects: allProjectsReducer,
    auth: authReducer
  },
})

export default store

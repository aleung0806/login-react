import { current, createSlice } from '@reduxjs/toolkit'

import authService from '../services/auth'
import projectReducer from '../reducers/project'
import serviceMaker from '../services/serviceMaker'
import userService from '../services/user'
import projectService from '../services/project'


import { removeProject } from './project'
import { setAllProjects, removeAllProjects } from './allProjects'

const initialState = {
  user: null,
  verified: null
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => { 
      return {verified: true, user: action.payload}
    },
    setLoggedOut: (state, action) => {
      return {verified: false, user: null}
    }
}
})

export const { setLoggedIn, setLoggedOut, setVerified } = authSlice.actions

export const login = (email, password) => async (dispatch) => {
  try{ 
    const user = await authService.login(email, password)
    dispatch(setLoggedIn(user))
  }catch(err){
    dispatch(setLoggedOut())
  }
}

export const fetchUser = () => async (dispatch) => {
  console.log('fetching user')
  try{
    const user = await userService.get()
    dispatch(setLoggedIn(user))
  }catch(err){
    console.log('failed')
    dispatch(setLoggedOut())
  }

}

export const logout = () => async (dispatch) => {
  dispatch(removeProject())
  dispatch(removeAllProjects())

  dispatch(setLoggedOut())

  await authService.logout()
}

export const register = (credentials) => async (dispatch) => {
  try{
    const user = await authService.register(credentials)
    dispatch(setLoggedIn(user))

  }catch(err){
    dispatch(setLoggedOut())
  }

}

export default authSlice.reducer
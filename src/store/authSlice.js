import { create } from 'zustand'
import authService from '../services/auth'
import { userService } from '../services'
  
export const authSlice = (set, get) => ({
    user: null,
    //admin only
    allUsers: [],
    //debug
    response: {},
    request: {},

    //debug
    setRequest: async (request) => {
      set({request: request})
    },
  
    setResponse: async (response) => {
      set({response: response})
    },
  
    //AUTH
    verifySession: async () => {
      const verifiedUser = await authService.verifySession()
      set({ user: verifiedUser })
      return verifiedUser
    },
    login: async (email, password) => {
      const verifiedUser = await authService.login(email, password)
      set({ user: verifiedUser })
      return verifiedUser
    },
    logout: async () => {
      set({ user: null })
      await authService.logout()
    },
    register: async (email, password) => {
      const registeredUser = await authService.register(email, password)
      set({ user: registeredUser })
    },

    // USERS
    getAllUsers: async () => {
      const users = await userService.getAll()
      set({allUsers: users})
    },
  
  })
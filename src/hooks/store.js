import { create } from 'zustand'
import authService from '../services/auth'
import userService from '../services/user'

export const useStore = create((set, get) => ({
  user: null,
  //admin only
  allUsers: [],

  //AUTH
  verifySession: async () => {
    const verifiedUser = await authService.verifySession()
    console.log('verifySession results: ', verifiedUser)
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

}))
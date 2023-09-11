import { create } from 'zustand'
import authService from '../services/auth'

export const useStore = create((set, get) => ({
  user: null,
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
  }
}))
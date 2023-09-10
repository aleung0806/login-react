import { create } from 'zustand'
import authService from '../services/auth'

export const useStore = create((set, get) => ({
  user: null,
  verifyUser: async () => {
    const verifiedUser = await authService.verify()
    console.log('verify results: ', verifiedUser)

    set({ user: verifiedUser })
  },
  login: async (email, password) => {
    const verifiedUser = await authService.login(email, password)
    set({ user: verifiedUser })
  },
  logout: async () => {
    set({ user: null })
    await authService.logout()
  }
}))
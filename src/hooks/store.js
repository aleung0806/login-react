import { create } from 'zustand'
import authService from '../services/auth'

export const useStore = create((set, get) => ({
  user: null,
  fetchUser: async () => {
    const verifiedUser = await authService.verify()
    set({ user: verifiedUser })
  },
  login: async (email, password) => {
    const verifiedUser = await authService.login(email, password)
    set({ user: verifiedUser })
  }
}))
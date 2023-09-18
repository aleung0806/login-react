import { create } from 'zustand'
import { authSlice } from './authSlice'
import { jiraSlice } from './jiraSlice'

export const useStore = create((...a) => ({
  ...authSlice(...a),
  ...jiraSlice(...a),
}))



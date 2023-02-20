import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IUser {
  pseudo: string
  email: string
  ppUrl?: string
  maxScore: number
  isDemoCompleted: boolean
}

interface UserState {
  user: IUser
  setUser: (user: IUser) => void
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {
          pseudo: 'benbenpetit',
          email: 'petitbenoit3@gmail.com',
          ppUrl: undefined,
          maxScore: 0,
          isDemoCompleted: false,
        },
        setUser: (user) => set((state) => ({ user: { ...state.user, user } })),
      }),
      { name: 'user' },
    ),
  ),
)

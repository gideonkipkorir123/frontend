import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "../src/gql/graphql"

interface UserState {
  id: string | undefined
  avatarUrl: string | null
  username: string
  email?: string
  updateProfileImage: (image: string) => void
  updateUsername: (name: string) => void
  setUser: (user: User) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      username: "",
      email: "",
      avatarUrl: null,

      updateProfileImage: (image: string) => set({ avatarUrl: image }),
      updateUsername: (name: string) => set({ username: name }),
      setUser: (user) =>
        set({
          id: user.id || undefined,
          avatarUrl: user.avatarUrl,
          username: user.username,
          email: user.email,
        }),
    }),
    {
      name: "user-store",
    }
  )
)
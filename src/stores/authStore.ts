import { create } from 'zustand'
import { User } from '@supabase/supabase-js'

interface AuthState {
  user: User
  signedIn: boolean,
  setUserObj: (userObj: User) => void
  setSignedIn: (signedInState: boolean) => void
}

const useAuthStore = create<AuthState>()((set) => ({
  user: {} as User,
  signedIn: false,
  setUserObj: (userObj) => set(({ user: userObj })),
  setSignedIn: (signedInState) => set(({ signedIn: signedInState }))
}))

export default useAuthStore
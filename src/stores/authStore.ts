import { create } from 'zustand'

interface AuthState {
  user: object
  signedIn: boolean,
  setUserObj: (userObj: object) => void
  setSignedIn: (signedInState: boolean) => void
}

const useAuthStore = create<AuthState>()((set) => ({
  user: {},
  signedIn: false,
  setUserObj: (userObj) => set(({ user: userObj })),
  setSignedIn: (signedInState) => set(({ signedIn: signedInState }))
}))

export default useAuthStore
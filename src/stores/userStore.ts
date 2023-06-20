import { create } from 'zustand'

interface AuthState {
  signedIn: boolean,
  profilePicture: string,
  username: string,

  setSignedIn: (signedInState: boolean) => void,
  setProfilePicture: (profilePicture: string) => void
  setUsername: (username: string) => void,
}

const useUserStore = create<AuthState>()((set) => ({
  signedIn: false,
  profilePicture: '',
  username: '',
  
  setUsername: (username) => set(({ username: username })),
  setSignedIn: (signedInState) => set(({ signedIn: signedInState })),
  setProfilePicture: (profilePicture) => set(({ profilePicture: profilePicture }))
}))

export default useUserStore
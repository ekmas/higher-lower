import { create } from 'zustand'

interface AuthState {
  signedIn: boolean,
  profilePicture: string,
  username: string,
  highScore: number,

  setSignedIn: (signedInState: boolean) => void,
  setProfilePicture: (profilePicture: string) => void
  setUsername: (username: string) => void,
  setHighScore: (highScore: number) => void
}

const useUserStore = create<AuthState>()((set) => ({
  signedIn: false,
  profilePicture: '',
  username: '',
  highScore: 0,
  
  setHighScore: (highScore) => set(({ highScore: highScore })),
  setUsername: (username) => set(({ username: username })),
  setSignedIn: (signedInState) => set(({ signedIn: signedInState })),
  setProfilePicture: (profilePicture) => set(({ profilePicture: profilePicture }))
}))

export default useUserStore
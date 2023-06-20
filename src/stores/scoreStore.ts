import { create } from "zustand"

interface ScoreState {
  score: number
  highScore: number
  updateScore: (num: number) => void
  updateHighScore: (num: number) => void
}

const useScoreStore = create<ScoreState>((set) => ({
  score: 0,
  highScore: 0,
  updateScore: (score) => set(() => ({ score: score })),
  updateHighScore: (score) => set(() => ({ highScore: score })),
}))

export default useScoreStore

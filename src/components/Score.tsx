import useScoreStore from "../stores/scoreStore"

export default function Score() {
  const { score, highScore } = useScoreStore()

  return (
    <div className="absolute w-full left-0 bottom-0 p-10 text-[20px] flex items-center justify-between text-white">
      <p>Score: {score}</p>
      <p>High score: {highScore}</p>
    </div>
  )
}

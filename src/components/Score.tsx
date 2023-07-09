import useScoreStore from "../stores/scoreStore"
import useUserStore from "../stores/userStore"

export default function Score() {
  const { signedIn } = useUserStore()
  const { score, highScore } = useScoreStore()

  return (
    <div className={signedIn ? "score justify-between" : "score justify-center portrait:justify-between"}>
      <p>Score: {score}</p>
      {signedIn && <p>High score: {highScore}</p>}
    </div>
  )
}

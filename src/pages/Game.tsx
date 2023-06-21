import { useEffect, useState } from "react"
import repos from "../repos.json"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"
import VSComponent from "../components/VSComponent"
import useScoreStore from "../stores/scoreStore"
import Score from "../components/Score"
import { supabase } from "../supabase"
import useUserStore from "../stores/userStore"

type Repository = {
  id?: number
  name: string
  avatar_url: string
  stargazers_count: number
  showButtonsProp?: boolean
  prevRepo?: Repository
  handleCardButton?: any
}

export default function Game() {
  const navigate = useNavigate()

  const [cards, setCards] = useState<Repository[]>([])
  const [pastRepos, setPastRepos] = useState<Repository[]>([])

  const [isGridMoved, setIsGridMoved] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showVS, setShowVS] = useState<boolean>(true)

  const { score, highScore, updateScore, updateHighScore } = useScoreStore()
  const { signedIn } = useUserStore()

  useEffect(() => {
    if (cards.length < 3) {
      addNewRepo()
    }
  }, [cards.length])

  const randomNumber = (range: number): number => Math.floor(Math.random() * range) + 1

  const addNewRepo = () => {
    const newRepo = repos[randomNumber(199)]

    const repositoryExists = pastRepos.some((repo) => repo.id === newRepo.id)

    if (repositoryExists) {
      addNewRepo()
    } else {
      setCards((cards) => [...cards, newRepo])
      setPastRepos((pastRepos) => [...pastRepos, newRepo])
    }
  }

  const handleScore = () => {
    updateScore(score + 1);
  
    if (score === highScore) {
      updateHighScore(score + 1);
    }
  }

  const updateUsersTable = async () => {
    await supabase
      .from('users')
      .update({ high_score: highScore })
      .eq('id', (await supabase.auth.getSession()).data.session?.user.id);
  }

  const handleCardButton = (correct: boolean) => {
    if (correct) {
      setIsCorrect(true)
      handleScore()

      setTimeout(() => {
        setShowVS(false)
      }, 1500)

      setTimeout(() => {
        setIsGridMoved(true)
        setIsCorrect(null)
      }, 1800)

      setTimeout(() => {
        setCards((prevArray) => [...prevArray.slice(1)])
        setIsGridMoved(false)
        setShowVS(true)
      }, 2300)
    } else {
      setIsCorrect(false)
      if (signedIn) updateUsersTable()

      setTimeout(() => {
        updateScore(0)
        navigate("/try-again")
      }, 1800)
    }
  }

  return (
    <>
      <div
        style={{
          transform: `translateX(${isGridMoved ? "-33.3%" : "0"})`,
          transition: isGridMoved ? "all 0.5s" : "none",
        }}
        className="game-wrapper"
      >
        {cards.map((card: Repository) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              avatar_url={card.avatar_url}
              stargazers_count={card.stargazers_count}
              showButtonsProp={cards.indexOf(card) !== 0}
              prevRepo={cards[cards.indexOf(card) - 1]}
              handleCardButton={handleCardButton}
            />
          )
        })}
      </div>
      <VSComponent 
        active={showVS}
        correct={isCorrect}
      />
      <Score />
    </>
  )
}

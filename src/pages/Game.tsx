import { useEffect, useState } from "react"
import repos from "../repos.json"
import Card from "../components/Card"
import VSComponent from "../components/VSComponent"
import useScoreStore from "../stores/scoreStore"
import Score from "../components/Score"
import { supabase } from "../supabase"
import useUserStore from "../stores/userStore"
import TryAgainModal from "../components/TryAgainModal"

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
  const [cards, setCards] = useState<Repository[]>([])
  // array of current 3 cards that each take half of the screen

  const [pastRepos, setPastRepos] = useState<Repository[]>([])
  // when adding a new card we are checking did we have it already in the current game
  // so the same card doesn't get displayed multiple times in the single game

  const [isGridMoved, setIsGridMoved] = useState<boolean>(false)
  // basically at the beginning we have 3 cards: 1, 2, and 3 (user only sees 1st and 2nd card)
  // when user's answer is correct we are pushing div that wraps cards to the left (translateX -33.3%) by setting isGridMoved to true
  // now user sees 2nd and 3rd card
  // then we are removing 1st card, adding 4th card, and setting isGridMoved to false (translateX 0)
  
  // repeat this process

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  // used for displaying checkmark icon

  const [showVS, setShowVS] = useState<boolean>(true)

  const { score, highScore, updateScore, updateHighScore } = useScoreStore()
  const { signedIn } = useUserStore()

  useEffect(() => {
    updateScore(0)

    // set score to 0 when game starts
  }, [])

  useEffect(() => {
    if (cards.length < 3) {
      addNewRepo()
    }
  }, [cards.length])

  const randomNumber = (range: number): number => Math.floor(Math.random() * range) + 1

  const addNewRepo = () => {
    const newRepo = repos[randomNumber(172)]

    // we are taking a random repo from repos.json

    const repositoryExists = pastRepos.some((repo) => repo.id === newRepo.id)

    if (repositoryExists) {
      addNewRepo()
    } else {
      setCards((cards) => [...cards, newRepo])
      setPastRepos((pastRepos) => [...pastRepos, newRepo])

      // if repo doesn't exist in pastRepos, we are adding it to cards array and past repos
    }
  }

  const handleScore = () => {
    updateScore(score + 1);
  
    if (signedIn && score === highScore) {
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
      setTimeout(() => {
        setIsCorrect(false)
      }, 500)
      if (signedIn) updateUsersTable()
    }
  }

  return (
    <>
      <div
        className={
          isGridMoved ? "grid-is-moved" : "grid-isnt-moved"
        }
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
      <TryAgainModal 
        active={isCorrect === false}
      />
    </>
  )
}

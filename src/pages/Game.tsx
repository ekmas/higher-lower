import { useEffect, useState } from "react"
import repos from "../repos.json"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

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

  const handleCardButton = (correct: boolean) => {
    if (correct) {
      setTimeout(() => {
        setIsGridMoved(true)
      }, 1300)

      setTimeout(() => {
        setCards((prevArray) => [...prevArray.slice(1)])
        setIsGridMoved(false)
      }, 3000)
    } else {
      setTimeout(() => {
        navigate("/try-again")
      }, 1300)
    }
  }

  return (
    <div
      style={{
        transform: `translateX(${isGridMoved ? "-33.3%" : "0"})`,
        transition: isGridMoved ? "all 0.5s" : "none",
      }}
      className="w-[150%] overflow-hidden text-white grid grid-cols-3 h-screen radial-gradient-bg"
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
  )
}

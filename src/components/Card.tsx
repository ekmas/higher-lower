import { useState } from "react"
import IconButton from "./IconButton"
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { CountUp } from "use-count-up"
import { Repository } from "../types"

export default function Card({ name, avatar_url, stargazers_count, showButtonsProp, prevRepo, handleCardButton }: Repository) {
  const [showButtons, setShowButtons] = useState(showButtonsProp)

  const handleButtonClick = (correct: boolean) => {
    handleCardButton(correct)
    setShowButtons(false)
  }
  
  return (
    <div className="card-wrapper">
      <img className="img-repo" src={avatar_url} alt={name} />

      <h1 className="repo-name-heading">{name}</h1>

      <p className="has-word">has</p>

      {showButtons ?
        <div>
          <div className="flex flex-col w-min mx-auto">
            <IconButton 
              icon={<AiOutlineCaretUp className="w-6 h-6 ml-3 m700:w-4 m700:h-4" />}
              onClick={() => handleButtonClick((stargazers_count > prevRepo?.stargazers_count))}
              text="Higher"
              classNames="card-button m700:mb-2"
            />

            <IconButton 
              icon={<AiOutlineCaretDown className="w-6 h-6 ml-4 m700:w-4 m700:h-4" />}
              onClick={() => handleButtonClick(stargazers_count < prevRepo?.stargazers_count)}
              text="Lower"
              classNames="card-button m700:mb-1"
            />
          </div>

          <p className="stars-than">stars than {prevRepo?.name}</p>
        </div>
        :
        <div>
          <h2 className="stars-count">
            {showButtonsProp ?
              <CountUp
                isCounting={true}
                duration={0.5} 
                start={stargazers_count - 1000}
                end={stargazers_count} 
              />
              :
              stargazers_count
            }
          </h2>
      
          <p className="stars-on-github">stars on github</p>
        </div>
      }
    </div>
  )
}

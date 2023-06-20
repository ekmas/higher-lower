import { useState } from "react"
import IconButton from "./IconButton"
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { CountUp } from "use-count-up"

type Repository = {
  id?: number,
  name: string
  avatar_url: string
  stargazers_count: number,
  showButtonsProp?: boolean,
  prevRepo?: any,
  handleCardButton?: any
}

export default function Card({ name, avatar_url, stargazers_count, showButtonsProp, prevRepo, handleCardButton }: Repository) {
  const [showButtons, setShowButtons] = useState(showButtonsProp)

  const handleButtonClick = (correct: boolean) => {
    handleCardButton(correct)
    setShowButtons(false)
  }
  
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img width={100} src={avatar_url} alt={name} />

      <h1 className="text-[35px] font-bold mt-6">{name}</h1>

      <p className="my-2">has</p>

      {showButtons ?
        <div>
          <div className="flex flex-col w-min mx-auto">
            <IconButton 
              icon={<AiOutlineCaretUp className="w-6 h-6 ml-3" />}
              onClick={() => handleButtonClick((stargazers_count > prevRepo?.stargazers_count))}
              text="Higher"
            />

            <IconButton 
              icon={<AiOutlineCaretDown className="w-6 h-6 ml-3" />}
              onClick={() => handleButtonClick(stargazers_count < prevRepo?.stargazers_count)}
              text="Lower"
            />
          </div>

          <p className="mt-2">stars than {prevRepo?.name}</p>
        </div>
        :
        <div>
          <h2 className="text-[30px] font-bold">
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
      
          <p className="my-2">stars on github</p>
        </div>
      }
    </div>
  )
}

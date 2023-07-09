import { useNavigate } from "react-router-dom"
import useScoreStore from "../stores/scoreStore"
import Button from "./Button"

type Props = {
  active: boolean | null
}

export default function TryAgainModal({ active }: Props) {
  const navigate = useNavigate()

  const { score } = useScoreStore()

  return (
    <div className={active ? "active-modal" : "not-active-modal"}>
      <div className="modal-main">
        <h2 className="font-bold text-[30px] m700:text-[25px]">You scored</h2>

        <h3 className="font-bold text-[35px] m700:text-[28px] m700:my-4 my-5">{score}</h3>

        <div className="flex flex-col w-max">
          <Button
            classNames="button px-8 py-2.5 mb-4 text-[18px] m700:text-base"
            onClick={() => navigate("/")}
            text="Back to home"
          />

          <Button
            classNames="button px-8 py-2.5 text-[18px] m700:text-base"
            onClick={() => navigate(0)}
            text="Play again"
          />
        </div>
      </div>
    </div>
  )
}

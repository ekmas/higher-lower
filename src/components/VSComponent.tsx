import { IoMdCheckmark, IoMdClose } from "react-icons/io"

type Props = {
  active: boolean,
  correct: boolean | null
}

export default function VSComponent({ active, correct }: Props) {
  return (
    <div
      style={{ opacity: active ? "1" : "0" }}
      className="vs-component-wrapper"
    >
      <div className="vs-component-secondary-wrapper">
        vs

        <div
          className={correct ? "vs-component-icon-wrapper top-0" : "vs-component-icon-wrapper-hidden"}
        >
          <IoMdCheckmark className="vs-component-checkmark" />
        </div>

        <div className="vs-component-hiding-layer"></div>
      </div>
    </div>
  )
}

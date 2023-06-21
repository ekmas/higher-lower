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
          style={{ top: correct ? '0' : '65px'  }}
          className="vs-component-icon-wrapper"
        >
          <IoMdCheckmark className="w-8 h-8 fill-[#111111]" />
        </div>

        <div 
          style={{ top: correct === false ? '0' : '65px'  }}
          className="vs-component-icon-wrapper"
        >
          <IoMdClose className="w-8 h-8 fill-[#111111]" />
        </div>

        <div className="vs-component-hiding-layer"></div>
      </div>
    </div>
  )
}

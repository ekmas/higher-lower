import { IoMdCheckmark, IoMdClose } from "react-icons/io"

type Props = {
  active: boolean,
  correct: boolean | null
}

export default function VSComponent({ active, correct }: Props) {
  return (
    <div
      style={{ opacity: active ? "1" : "0" }}
      className="transition w-16 h-16 text-white flex rounded-full items-center justify-center absolute top-[calc(50vh-32px)] left-[calc(50%-32px)]"
    >
      <div className="w-full h-full relative flex items-center justify-center text-[20px]">
        vs

        <div
          style={{ top: correct ? '0' : '65px'  }}
          className="transition-[top] absolute w-full h-full flex items-center rounded-full justify-center bg-white"
        >
          <IoMdCheckmark className="w-8 h-8 fill-[#111111]" />
        </div>

        <div 
          style={{ top: correct === false ? '0' : '65px'  }}
          className="transition-[top] absolute w-full h-full flex items-center rounded-full justify-center bg-white"
        >
          <IoMdClose className="w-8 h-8 fill-[#111111]" />
        </div>

        <div className="top-[65px] absolute w-full h-full flex items-center justify-center bg-[#111111]"></div>
      </div>
    </div>
  )
}

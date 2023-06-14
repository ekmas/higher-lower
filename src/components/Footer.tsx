import { AiFillGithub } from "react-icons/ai"

export default function Footer() {
  return (
    <footer className="py-3 flex items-center justify-center">
      <a target="_blank" href="https://github.com/ekmas/higher-lower">
        <AiFillGithub className="fill-white w-8 h-8" />
      </a>
    </footer>
  )
}

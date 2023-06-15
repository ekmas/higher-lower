import { Link } from "react-router-dom"

export default function GuestNavbar() {
  return (
    <nav>
      <div className="w-container px-containerDesktop max-w-full h-[98px] mx-auto flex items-center justify-center text-white">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl hover:text-white/80">Higher Lower</h1>
        </Link>
      </div>
    </nav>
  )
}

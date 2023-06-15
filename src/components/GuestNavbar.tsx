import { Link } from "react-router-dom"

export default function GuestNavbar() {
  return (
    <nav>
      <div className="navbar justify-center">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl hover:text-white/80">Higher Lower</h1>
        </Link>
      </div>
    </nav>
  )
}

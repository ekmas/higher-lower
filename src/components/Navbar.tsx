import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import ProfileButton from "./ProfileButton"

export default function Navbar() {
  const navigate = useNavigate()
  const signedIn = true

  return (
    <nav>
      <div className="w-container px-containerDesktop max-w-full h-[98px] mx-auto flex items-center justify-between text-white">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl hover:text-white/80">Higher Lower</h1>
        </Link>

        <div className="flex items-center">
          <Link className="hover:text-white/80" to={"/leaderboard"}>Leaderboard</Link>

          {signedIn ?
            <ProfileButton />
            :
            <Button 
              classNames={"px-5 py-3 ml-8 button"}
              onClick={() => {navigate('/sign-in')}}
              text={"Sign In"}
            />
          }
        </div>
      </div>
    </nav>
  )
}

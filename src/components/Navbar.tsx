import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import ProfileButton from "./ProfileButton"
import useUserStore from "../stores/userStore"

export default function Navbar() {
  const navigate = useNavigate()
  const signedIn = useUserStore((state) => state.signedIn)

  return (
    <nav>
      <div className="navbar justify-between">
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

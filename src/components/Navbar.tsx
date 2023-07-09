import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import ProfileButton from "./ProfileButton"
import useUserStore from "../stores/userStore"

export default function Navbar() {
  const navigate = useNavigate()
  const { signedIn } = useUserStore()

  return (
    <nav>
      <div className="navbar justify-between">
        <Link to={"/"}>
          <h1 className="font-bold hidden desktop:block text-2xl hover:text-white/80">Higher Lower</h1>
          <h1 className="font-bold hidden mobile:block text-2xl hover:text-white/80">HL</h1>
        </Link>

        <div className="flex items-center">
          <Link className="hover:text-white/80 m600:text-[13px]" to={"/leaderboard"}>Leaderboard</Link>

          {signedIn ?
            <ProfileButton />
            :
            <Button 
              classNames={"navbar-sign-in-button"}
              onClick={() => {navigate('/sign-in')}}
              text={"Sign In"}
            />
          }
        </div>
      </div>
    </nav>
  )
}

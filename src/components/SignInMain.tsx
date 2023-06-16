import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai"
import SignInButton from "./SignInButton"

export default function SignInMain() {
  return (
    <div className="main flex-col">
      <h1 className="text-white font-bold w-[80%] mb-16 mx-auto text-[40px]">
        Sign in
      </h1>

      <div className="text-white flex flex-col pb-[80px]">
        <SignInButton 
          provider={"google"}
          icon={<AiOutlineGoogle className="w-6 h-6 ml-3" />}
        />

        <SignInButton 
          provider={"github"}
          icon={<AiFillGithub className="w-6 h-6 ml-3" />}
        />
      </div>
    </div>
  )
}

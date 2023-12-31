import { AiFillGithub } from "react-icons/ai"
import IconButton from "./IconButton"
import { Provider } from "@supabase/supabase-js"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"

export default function SignInMain() {
  const navigate = useNavigate()

  async function signIn(provider: Provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })

    console.log(data)

    if (error) navigate(0)
  }

  return (
    <div className="main items-center flex-col">
      <h1 className="sign-in-heading">
        Sign in
      </h1>

      <div className="text-white flex flex-col pb-[40px]">
        <IconButton 
          onClick={() => signIn("github")}
          icon={<AiFillGithub className="w-6 h-6 ml-3" />}
          text="Sign in with"
          classNames="icon-button"
        />
      </div>
    </div>
  )
}

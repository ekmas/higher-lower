import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"

export default function SignInMain() {
  const navigate = useNavigate()

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    })

    if (error) navigate(0)
  }

  async function signInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    })

    if (error) navigate(0)
  }

  return (
    <div className="min-h-[calc(100vh-98px-72px)] w-container px-containerDesktop mx-auto flex flex-col text-center items-center justify-center pt-[70px] pb-[130px]">
      <h1 className="text-white font-bold w-[80%] mb-16 mx-auto text-[40px]">
        Sign in
      </h1>

      <div className="text-white flex flex-col">
        <button className="button px-16 py-4" onClick={signInWithGoogle}>Sign in with google</button>
        <div className="my-2.5"></div>
        <button className="button px-16 py-4" onClick={signInWithGithub}>Sign in with github</button>
      </div>
    </div>
  )
}

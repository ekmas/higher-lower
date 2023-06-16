import { Provider } from "@supabase/supabase-js"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"

type ButtonProps = {
  provider: Provider
  icon: JSX.Element
}

export default function SignInButton({ provider, icon }: ButtonProps) {
  const navigate = useNavigate()

  async function signIn(provider: Provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })

    if (error) navigate(0)
  }

  return (
    <button onClick={() => signIn(provider)} className="button flex items-center px-14 py-4 my-2">
      Sign in with
      {icon}
    </button>
  )
}

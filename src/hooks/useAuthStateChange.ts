import { useEffect } from "react"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"
import { User } from "@supabase/supabase-js"
import useUserStore from "../stores/userStore"
import useScoreStore from "../stores/scoreStore"

const useAuthStateChange = () => {
  const navigate = useNavigate()

  const { setSignedIn, setProfilePicture, setUsername } = useUserStore()
  const { updateHighScore } = useScoreStore()

  const doesUserExists = async (user: User) => {
    const id = user.id
    const username = user.user_metadata.user_name || user.user_metadata.full_name

    setUsername(username)

    const { data } = await supabase.from("users").select().eq("id", id)

    if (data?.length === 0) {
      updateHighScore(0)

      const { error } = await supabase
        .from("users")
        .insert({ id: id, username: username, high_score: 0 })

      if (error) {
        navigate(0)
      }
    }
    
    updateHighScore(data?.at(0).high_score)
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setSignedIn(true)
        setProfilePicture(session.user.user_metadata.avatar_url)

        doesUserExists(session.user)
      } else {
        setSignedIn(false)
      }
    })
  }, [])
}

export default useAuthStateChange

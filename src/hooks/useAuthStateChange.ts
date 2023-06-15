import { useEffect } from "react"
import { supabase } from "../supabase"
import useAuthStore from "../stores/authStore"

const useAuthStateChange = () => {
  const setSignedIn = useAuthStore((state) => state.setSignedIn)
  const setUserObj = useAuthStore((state) => state.setUserObj)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setSignedIn(true)
        setUserObj(session.user)
      } else {
        setSignedIn(false)
      }
    })
  }, [])
}

export default useAuthStateChange

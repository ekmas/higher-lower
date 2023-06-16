import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
import ProfileDropdownButton from './ProfileDropdownButton'

export default function ProfileDropdown({ active }: { active: boolean } ) {
  const navigate = useNavigate()

  const signOut = async () => {
    await supabase.auth.signOut()

    navigate(0)
  }

  return (
    <div className={active ? "profile-dropdown-active" : "hidden"}>
      <ProfileDropdownButton 
        onClick={() => navigate("/profile")}
        icon={<FaUser />}
        text="My profile"
      />

      <ProfileDropdownButton 
        onClick={signOut}
        icon={<BiLogOut />}
        text="Sign out"
      />
    </div>
  )
}


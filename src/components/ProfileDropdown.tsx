import { BiLogOut } from 'react-icons/bi'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
import ProfileDropdownButton from './ProfileDropdownButton'
import useUserStore from '../stores/userStore'

export default function ProfileDropdown({ active }: { active: boolean } ) {
  const navigate = useNavigate()

  const { username } = useUserStore()

  const signOut = async () => {
    await supabase.auth.signOut()

    navigate(0)
  }

  return (
    <div className={active ? "profile-dropdown-active" : "hidden"}>
      <div className='px-5 py-2'>
        <h4 className='font-medium text-center'>{username}</h4>
      </div>

      <ProfileDropdownButton 
        onClick={signOut}
        icon={<BiLogOut />}
        text="Sign out"
      />
    </div>
  )
}


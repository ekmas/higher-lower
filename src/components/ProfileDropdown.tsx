import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function ProfileDropdown({ active }: { active: boolean } ) {
  const navigate = useNavigate()

  const signOut = async () => {
    await supabase.auth.signOut()

    navigate(0)
  }

  return (
    <div className={active ? "absolute top-16 right-0 bg-black border w-max border-white/75 block p-2 rounded-xl" : "hidden"}>
      <button className="px-5 py-2 rounded-xl hover:bg-[#333333] w-full text-left flex items-center">
        <span className='mr-5'>
          <FaUser />
        </span>
        My profile
      </button>
      <button onClick={signOut} className="px-5 py-2 rounded-xl hover:bg-[#333333] w-full text-left flex items-center">
        <span className='mr-5'>
          <BiLogOut />
        </span>
        Sign out
      </button>
    </div>
  )
}


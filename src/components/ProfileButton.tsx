import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function ProfileButton() {
  const profilePictureUrl = '';

  const [activeProfileDropdown, setActiveProfileDropdown] = useState<boolean>(false)

  return (
    <div className="relative ml-8 h-11">
      <button 
        onClick={() => {setActiveProfileDropdown(!activeProfileDropdown)}}
        style={{ backgroundColor: 'white', backgroundImage: profilePictureUrl }}
        className="w-11 h-11 rounded-full bg-center bg-cover bg-no-repeat outline outline-1 outline-transparent transition-all hover:outline-white/75">
      </button>

      <ProfileDropdown 
        active={activeProfileDropdown}
      />
    </div>
  )
}

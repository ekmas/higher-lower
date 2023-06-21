import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import useAuthStore from "../stores/userStore";

export default function ProfileButton() {
  const { profilePicture } = useAuthStore()

  const [activeProfileDropdown, setActiveProfileDropdown] = useState<boolean>(false)

  return (
    <div className="relative ml-8 h-11">
      <button 
        onClick={() => {setActiveProfileDropdown(!activeProfileDropdown)}}
        style={{ backgroundImage: `url(${profilePicture})`, backgroundColor: 'white' }}
        className="profile-button">
      </button>

      <ProfileDropdown 
        active={activeProfileDropdown}
      />
    </div>
  )
}

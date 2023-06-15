import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import useAuthStore from "../stores/authStore";

export default function ProfileButton() {
  const user = useAuthStore((state) => state.user)

  const avatarUrl = user.user_metadata.avatar_url;

  const [activeProfileDropdown, setActiveProfileDropdown] = useState<boolean>(false)

  return (
    <div className="relative ml-8 h-11">
      <button 
        onClick={() => {setActiveProfileDropdown(!activeProfileDropdown)}}
        style={{ backgroundImage: `url(${avatarUrl})`, backgroundColor: 'white' }}
        className="profile-button">
      </button>

      <ProfileDropdown 
        active={activeProfileDropdown}
      />
    </div>
  )
}

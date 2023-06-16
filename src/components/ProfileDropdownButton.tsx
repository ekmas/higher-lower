type ButtonProps = {
    onClick: () => void,
    icon: JSX.Element,
    text: string
}

export default function ProfileDropdownButton({ onClick, icon, text }: ButtonProps) {
  return (
    <button onClick={onClick} className="profile-dropdown-button">
      <span className="mr-5">
        {icon}
      </span>
      {text}
    </button>
  )
}

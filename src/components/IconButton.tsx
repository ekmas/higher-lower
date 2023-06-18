type ButtonProps = {
  onClick: any
  icon: JSX.Element
}

export default function IconButton({ onClick, icon }: ButtonProps) {
  return (
    <button onClick={onClick} className="button flex items-center px-14 py-4 my-2">
      Sign in with
      {icon}
    </button>
  )
}

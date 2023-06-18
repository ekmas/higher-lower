type ButtonProps = {
  onClick: any
  icon: JSX.Element,
  text: string
}

export default function IconButton({ onClick, icon, text }: ButtonProps) {
  return (
    <button onClick={onClick} className="button flex items-center px-14 py-3.5 my-2">
      {text}
      {icon}
    </button>
  )
}

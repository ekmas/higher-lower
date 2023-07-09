type ButtonProps = {
  onClick: any
  icon: JSX.Element,
  text: string,
  classNames: string
}

export default function IconButton({ onClick, icon, text, classNames }: ButtonProps) {
  return (
    <button onClick={onClick} className={classNames}>
      {text}
      {icon}
    </button>
  )
}

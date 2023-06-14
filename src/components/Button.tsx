type ButtonProps = {
  classNames: string
  onClick: () => void
  text: string
}

export default function Button({ classNames, onClick, text }: ButtonProps) {
  return (
    <button onClick={onClick} className={classNames}>
      {text}
    </button>
  )
}

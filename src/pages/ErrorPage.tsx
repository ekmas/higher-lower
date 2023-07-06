import { FallbackProps } from "react-error-boundary"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function ErrorPage(props: FallbackProps) {
  const navigate = useNavigate()
  const { error } = props

  return (
    <div className="error-page">
      <div className="modal-main">
        <h2 className="font-bold text-[30px]">An error has occured.</h2>

        <p className="my-5 text-lg">Error: {error.message}</p>

        <p className="mb-3 text-lg">If this error keeps occurring please contact me via</p>

        <a className="underline mb-6" href="mailto:samuelbreznjak35@gmail.com">samuelbreznjak35@gmail.com</a>

        <Button
          classNames="button px-8 py-2.5 mb-4 text-[18px]"
          onClick={() => navigate(0)}
          text="Refresh page"
        />
      </div>
    </div>
  )
}

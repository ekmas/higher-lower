import { FallbackProps } from "react-error-boundary"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function ErrorPage(props: FallbackProps) {
  const navigate = useNavigate()
  const { error } = props

  return (
    <div className="error-page">
      <div className="modal-main">
        <h2 className="font-bold text-[30px] m700:text-[25px]">An error has occured.</h2>

        <p className="my-5 text-lg m700:text-base m400:text-sm">{error.message}</p>

        <p className="mb-3 text-lg m700:text-base m400:text-sm">If this error keeps occurring please contact me via</p>

        <a className="underline mb-6 m400:text-sm" href="mailto:samuelbreznjak35@gmail.com">samuelbreznjak35@gmail.com</a>

        <Button
          classNames="button px-8 py-2.5 mb-4 text-[18px] m700:text-base m400:text-sm"
          onClick={() => navigate(0)}
          text="Refresh page"
        />
      </div>
    </div>
  )
}

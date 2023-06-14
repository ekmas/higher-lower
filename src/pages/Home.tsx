import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen radial-gradient-bg ">
      <Navbar />
      <main className="min-h-[calc(100vh-98px-72px)] w-container px-containerDesktop mx-auto flex text-center items-center justify-center py-[70px]">
        <div>
          <h1 className="text-white font-bold text-[40px]">Guess which github repository has a higher or lower amount of stars!</h1>

          <Button 
            onClick={() => {navigate('/app')}}
            text="Play"
            classNames="button px-10 py-3.5 text-[22px] mt-6"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

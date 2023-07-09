import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="w-full min-h-screen radial-gradient-bg ">
      <Navbar />
      <main className="main items-center">
        <div>
          <h1 className="home-heading">
            Guess which github repository has a higher or lower amount of stars!
          </h1>

          <Button
            onClick={() => navigate("/app")}
            text="Play"
            classNames="home-cta-button"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

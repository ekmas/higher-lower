import Footer from "../components/Footer"
import GuestNavbar from "../components/GuestNavbar"
import SignInMain from "../components/SignInMain"

export default function SignIn() {
  return (
    <div className="w-full min-h-screen radial-gradient-bg ">
      <GuestNavbar />
      <SignInMain />
      <Footer />
    </div>
  )
}

import Footer from "../components/Footer";
import LeaderboardMain from "../components/LeaderboardMain";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
  return (
    <div className="w-full min-h-screen radial-gradient-bg ">
      <Navbar />
      <LeaderboardMain />
      <Footer />
    </div>
  )
}

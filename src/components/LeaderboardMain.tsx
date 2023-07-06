import { useEffect, useState } from "react"
import { supabase } from "../supabase";
import SignInMessage from "./SignInMessage";
import useUserStore from "../stores/userStore";

type LeaderboardType = {
  uuid: string,
  username: string,
  high_score: number
}

export default function LeaderboardMain() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([])

  const { signedIn } = useUserStore()

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .gt('high_score', 0)
        .order('high_score', { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setLeaderboard(data);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <main className="main">
      <div>
        <h1 className="text-white font-bold mx-auto text-[40px]">
          Leaderboard
        </h1>

        <div className="w-[600px] mt-[50px] border border-white/30 rounded-xl">
          <table className="w-full text-white rounded-xl">
            <thead>
              <tr className="bg-primaryBlack hover:bg-secondaryBlack transition">
                <td className="w-[50px] py-2">#</td>
                <td className="text-left pl-4 py-2">Username</td>
                <td className="w-[120px] py-2">High score</td>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((player: LeaderboardType, index) => {
                return(
                  <tr className="bg-primaryBlack hover:bg-secondaryBlack transition" key={index}>
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2 pl-4 text-left">{player.username}</td>
                    <td className="py-2">{player.high_score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {!signedIn && <SignInMessage />}
    </main>
  )
}

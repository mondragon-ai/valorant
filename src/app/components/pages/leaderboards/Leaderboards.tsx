import styles from "../Pages.module.css";
import {LeaderboardRow} from "./LeaderboardRow";
import {RankedLeaderboardPlayers} from "@/types/leaderboards";

export const Leaderboards = ({
  leaderboard,
}: {
  leaderboard: RankedLeaderboardPlayers[];
}) => {
  return (
    <div className={styles.leaderboardWrapper}>
      <header>
        <h6 style={{width: "15%", marginLeft: "1rem"}}>Rank</h6>
        <h6 style={{width: "55%", padding: "0.5rem 0"}}>Player</h6>
        <h6 style={{width: "30%", background: "#4141411e"}}>Ranked Rating</h6>
      </header>
      {leaderboard &&
        leaderboard.map((leader, i) => {
          return <LeaderboardRow key={i} leader={leader} />;
        })}
    </div>
  );
};

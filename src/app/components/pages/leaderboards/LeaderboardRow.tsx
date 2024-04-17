import Image from "next/image";
import styles from "../Pages.module.css";
import {LeaderRowType} from "@/types/players";
import {countingNumberWithSuffix} from "@/utils/format";
import {RankedLeaderboardPlayers} from "@/types/leaderboards";

export const LeaderboardRow = ({
  leader,
}: {
  leader: RankedLeaderboardPlayers;
}) => {
  const even = leader.leaderboardRank % 2 == 0;
  return (
    <div
      className={styles.leaderboardRow}
      style={{background: even ? "rgba(65, 65, 65, 0.117)" : ""}}
    >
      <div
        style={{
          width: "15%",
          marginLeft: "1rem",
          justifyContent: "center",
          borderLeft:
            leader.leaderboardRank == 1
              ? "2px solid gold"
              : leader.leaderboardRank == 2
              ? "2px solid silver"
              : leader.leaderboardRank == 3
              ? "2px solid brown"
              : "",
        }}
      >
        <h4>{leader.leaderboardRank}</h4>
        <span>{countingNumberWithSuffix(leader.leaderboardRank)}</span>
      </div>

      <div style={{width: "55%"}}>
        <div className={styles.playerItem}>
          <h5>{leader.gameName}</h5>
          <span>#{leader.tagLine}</span>
        </div>
      </div>

      <div
        style={{
          width: "30%",
          background: "#4141411e",
          alignItems: "center",
        }}
      >
        <Image
          src={
            "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png"
          }
          alt={""}
          height={1000}
          width={1000}
        />
        <h5>{leader.rankedRating}</h5>
      </div>
    </div>
  );
};

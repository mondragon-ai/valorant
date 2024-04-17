import styles from "../Pages.module.css";
import {countingNumberWithSuffix} from "@/utils/format";
import {ChallengeLeaderType} from "@/types/challenges";

export const ChallengeLeaderRow = ({leader}: {leader: ChallengeLeaderType}) => {
  const even = leader.rank % 2 == 0;
  const ratio = 100 - Math.round((leader.deaths / leader.kills) * 100);
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
            leader.rank == 1
              ? "2px solid gold"
              : leader.rank == 2
              ? "2px solid silver"
              : leader.rank == 3
              ? "2px solid brown"
              : "",
        }}
      >
        <h4>{leader.rank}</h4>
        <span>{countingNumberWithSuffix(leader.rank)}</span>
      </div>

      <div className={styles.leaderInfoWrapper}>
        <div className={styles.leaderInfo}>
          <div style={{width: "55%"}}>
            <div className={styles.playerItem}>
              <h5>{leader.player}</h5>
              <span style={{margin: "5px 0"}}>#{leader.tag}</span>
            </div>
          </div>

          <div
            style={{
              width: "35%",
              // background: "#4141411e",
              paddingLeft: "10px",
            }}
          >
            <h5>{`${leader.kills} / ${leader.deaths}`}</h5>
          </div>
        </div>
        <div className={styles.ratioWrapper}>
          <div>
            <div style={{width: `${ratio > 0 ? ratio : 0}%`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

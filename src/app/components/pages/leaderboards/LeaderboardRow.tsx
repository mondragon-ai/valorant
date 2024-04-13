import Image from "next/image";
import styles from "../Pages.module.css";
import {LeaderRowType} from "@/types/players";
import {countingNumberWithSuffix} from "@/utils/format";

export const LeaderboardRow = ({leader}: {leader: LeaderRowType}) => {
  const even = leader.rank % 2 == 0;
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

      <div style={{width: "55%"}}>
        <div className={styles.playerItem}>
          <h5>{leader.player}</h5>
          <span>#{leader.tag}</span>
        </div>
      </div>

      <div
        style={{
          width: "30%",
          background: "#4141411e",
          alignItems: "center",
        }}
      >
        <Image src={leader.image} alt={""} height={1000} width={1000} />
        <h5>{leader.rating}</h5>
      </div>
    </div>
  );
};

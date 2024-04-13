import Image from "next/image";
import styles from "../Pages.module.css";
import {LeaderRowType} from "@/types/players";

export const LeaderboardRow = ({
  leader,
  index = 0,
}: {
  leader: LeaderRowType;
  index: number;
}) => {
  const even = (index + 1) % 2 == 0;
  return (
    <div
      className={styles.leaderboardRow}
      style={{background: even ? "rgba(65, 65, 65, 0.117)" : ""}}
    >
      <div style={{width: "15%", marginLeft: "1rem", justifyContent: "center"}}>
        <h4>{index + 1}</h4>
      </div>
      <div style={{width: "55%"}}>
        <div className={styles.playerItem}>
          <h5>{leader.player}</h5>
          <span>#{leader.tag}</span>
        </div>
      </div>
      <div style={{width: "30%", background: "#4141411e"}}>
        <Image src={leader.image} alt={""} height={1000} width={1000} />
        <h5>{leader.rank}</h5>
      </div>
    </div>
  );
};

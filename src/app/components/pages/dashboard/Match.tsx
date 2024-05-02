import Image from "next/image";
import styles from "../Pages.module.css";
import {RecentMatchTypes} from "@/types/matches";

export const Match = ({match}: {match: RecentMatchTypes}) => {
  return (
    <div
      className={styles.match}
      style={{
        background: match.win
          ? "linear-gradient(rgb(45, 214, 127), rgb(112, 223, 166))"
          : "linear-gradient(rgb(230, 73, 73), rgb(223, 112, 112))",
      }}
    >
      <h4>{match.map}</h4>
      <h6 style={{fontWeight: "100"}}>{match.score} Score</h6>
      <Image src={match.image} alt={""} height={1000} width={1000} />
      <h6>K / D / A</h6>
      <h6>
        {match.kills} / {match.deaths} / {match.assists}
      </h6>
    </div>
  );
};

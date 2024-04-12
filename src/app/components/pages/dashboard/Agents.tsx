import Image from "next/image";
import styles from "../Pages.module.css";
import {TopAgentsTypes} from "@/types/agents";

export const Agents = ({agent}: {agent: TopAgentsTypes}) => {
  return (
    <div className={styles.agent}>
      <div className={styles.text}>
        <span>Games Played</span>
        <h6>{agent.games_played}</h6>
        <span>Win Rate</span>
        <h6>{agent.win_rate}%</h6>
        <span>K/D Ratio</span>
        <h6>{agent.kdr}</h6>
        <h4>{agent.name}</h4>
      </div>
      <div className={styles.image}>
        <Image src={agent.image} alt={""} width={1000} height={1000} />
      </div>
    </div>
  );
};

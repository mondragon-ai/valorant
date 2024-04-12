import Image from "next/image";
import styles from "../Pages.module.css";
import {Agents} from "./Agents";
import {TopAgentsTypes} from "@/types/agents";

const top_agents = [
  {
    name: "Jett",
    kdr: 1.8,
    win_rate: 62,
    games_played: 300,
    image:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",
  },
  {
    name: "Raze",
    kdr: 1.6,
    win_rate: 60,
    games_played: 280,
    image:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png",
  },
  {
    name: "Sova",
    kdr: 1.4,
    win_rate: 55,
    games_played: 270,
    image:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png",
  },
  {
    name: "Cypher",
    kdr: 1.3,
    win_rate: 53,
    games_played: 260,
    image:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png",
  },
  {
    name: "Breach",
    kdr: 1.2,
    win_rate: 50,
    games_played: 240,
    image:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png",
  },
] as TopAgentsTypes[];

export const TopAgents = () => {
  return (
    <section className={styles.topAgentsWrapper}>
      <h5 style={{padding: "2rem 1rem 0 1rem"}}>Top Agents</h5>
      <div className={styles.agentContainer}>
        {top_agents &&
          top_agents.map((agent, i) => {
            return <Agents agent={agent} />;
          })}
      </div>
    </section>
  );
};

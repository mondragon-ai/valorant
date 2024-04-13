import styles from "../Pages.module.css";
import {TopAgentsTypes} from "@/types/agents";
import {Match} from "./Match";
import {RecentMatchTypes} from "@/types/matches";

const recent_matches = [
  {
    map: "Ascent",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9c/Team_Deathmatch.png/revision/latest?cb=20230627133018",
    kills: 23,
    deaths: 12,
    assists: 2,
    win: false,
    score: 214,
  },
  {
    map: "Bind",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9c/Team_Deathmatch.png/revision/latest?cb=20230627133018",
    kills: 18,
    deaths: 8,
    assists: 5,
    win: true,
    score: 223,
  },
  {
    map: "Breeze",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9c/Team_Deathmatch.png/revision/latest?cb=20230627133018",
    kills: 20,
    deaths: 10,
    assists: 3,
    win: true,
    score: 234,
  },
  {
    map: "Icebox",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9c/Team_Deathmatch.png/revision/latest?cb=20230627133018",
    kills: 15,
    deaths: 14,
    assists: 1,
    win: true,
    score: 312,
  },
  {
    map: "Split",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9c/Team_Deathmatch.png/revision/latest?cb=20230627133018",
    kills: 25,
    deaths: 9,
    assists: 4,
    win: false,
    score: 345,
  },
] as RecentMatchTypes[];

export const RecentMatches = () => {
  return (
    <section
      className={styles.topAgentsWrapper}
      style={{paddingBottom: "2rem"}}
    >
      <h5 style={{padding: "2rem 1rem 0 1rem"}}>Recent Matches</h5>
      <div className={styles.agentContainer}>
        {recent_matches &&
          recent_matches.map((match, i) => {
            return <Match match={match} />;
          })}
      </div>
    </section>
  );
};

import {LeaderRowType} from "@/types/players";
import styles from "../Pages.module.css";
import {LeaderboardRow} from "./LeaderboardRow";

const leaders = [
  {
    player: "Mithrandir",
    tag: "uau",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 982,
  },
  {
    player: "Gandalf",
    tag: "xyz",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 940,
  },
  {
    player: "Aragorn",
    tag: "abc",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 900,
  },
  {
    player: "Legolas",
    tag: "def",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 880,
  },
  {
    player: "Gimli",
    tag: "ghi",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 850,
  },
  {
    player: "Frodo",
    tag: "jkl",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 820,
  },
  {
    player: "Samwise",
    tag: "mno",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 800,
  },
  {
    player: "Gollum",
    tag: "pqr",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 780,
  },
  {
    player: "Boromir",
    tag: "stu",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 750,
  },
  {
    player: "Sauron",
    tag: "vwx",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rank: 700,
  },
] as LeaderRowType[];

console.log(leaders);

export const Leaderboards = () => {
  return (
    <div className={styles.leaderboardWrapper}>
      <header>
        <h6 style={{width: "15%", marginLeft: "1rem"}}>Rank</h6>
        <h6 style={{width: "55%", padding: "0.5rem 0"}}>Player</h6>
        <h6 style={{width: "30%", background: "#4141411e"}}>Ranked Rating</h6>
      </header>
      {leaders &&
        leaders.map((leader, index) => {
          return <LeaderboardRow leader={leader} index={index} />;
        })}
    </div>
  );
};

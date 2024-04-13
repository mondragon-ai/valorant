import {LeaderRowType} from "@/types/players";
import styles from "../Pages.module.css";
import {LeaderboardRow} from "./LeaderboardRow";

const leaders = [
  {
    player: "Mithrandir",
    tag: "uau",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 982,
    rank: 1,
  },
  {
    player: "Gandalf",
    tag: "xyz",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 940,
    rank: 2,
  },
  {
    player: "Aragorn",
    tag: "abc",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 900,
    rank: 3,
  },
  {
    player: "Legolas",
    tag: "def",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 880,
    rank: 4,
  },
  {
    player: "Gimli",
    tag: "ghi",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 850,
    rank: 5,
  },
  {
    player: "Frodo",
    tag: "jkl",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 820,
    rank: 6,
  },
  {
    player: "Samwise",
    tag: "mno",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 800,
    rank: 7,
  },
  {
    player: "Gollum",
    tag: "pqr",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 780,
    rank: 8,
  },
  {
    player: "Boromir",
    tag: "stu",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 750,
    rank: 9,
  },
  {
    player: "Sauron",
    tag: "vwx",
    image:
      "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png",
    rating: 700,
    rank: 10,
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
        leaders.map((leader) => {
          return <LeaderboardRow leader={leader} />;
        })}
    </div>
  );
};

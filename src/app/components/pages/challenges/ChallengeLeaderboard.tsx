import {ChallengeLeaderType} from "@/types/challenges";
import styles from "../Pages.module.css";
import {ChallengeLeaderRow} from "./ChallengeLeaderRow";

export const ChallengeLeaderboard = () => {
  return (
    <div className={styles.leaderboardWrapper} style={{paddingBottom: "2rem"}}>
      <header>
        <h6 style={{width: "15%", marginLeft: "1rem"}}>Rank</h6>
        <h6 style={{width: "55%", padding: "0.5rem 0"}}>Player</h6>
        <h6 style={{width: "30%", background: "#4141411e"}}>K / D Stats</h6>
      </header>
      {leaders &&
        leaders.map((leader, i) => {
          return <ChallengeLeaderRow leader={leader} />;
        })}
    </div>
  );
};

const leaders = [
  {
    player: "Mithrandir",
    tag: "uau",
    avatar: "",
    kills: 982,
    deaths: 123,
    rank: 1,
  },
  {
    player: "Legolas",
    tag: "elf",
    avatar: "",
    kills: 848,
    deaths: 150,
    rank: 2,
  },
  {
    player: "Gimli",
    tag: "dwarf",
    avatar: "",
    kills: 823,
    deaths: 380,
    rank: 3,
  },
  {
    player: "Aragorn",
    tag: "king",
    avatar: "",
    kills: 799,
    deaths: 409,
    rank: 4,
  },
  {
    player: "Frodo",
    tag: "ringbearer",
    avatar: "",
    kills: 734,
    deaths: 500,
    rank: 5,
  },
  {
    player: "Gandalf",
    tag: "wizard",
    avatar: "",
    kills: 698,
    deaths: 490,
    rank: 6,
  },
  {
    player: "Boromir",
    tag: "captain",
    avatar: "",
    kills: 612,
    deaths: 470,
    rank: 7,
  },
  {
    player: "Samwise",
    tag: "gardener",
    avatar: "",
    kills: 575,
    deaths: 490,
    rank: 8,
  },
  {
    player: "Sauron",
    tag: "darklord",
    avatar: "",
    kills: 523,
    deaths: 500,
    rank: 9,
  },
  {
    player: "Gollum",
    tag: "precious",
    avatar: "",
    kills: 501,
    deaths: 500,
    rank: 10,
  },
] as ChallengeLeaderType[];

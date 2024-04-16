import Image from "next/image";
import styles from "../Pages.module.css";
import {ChallengeType} from "@/types/challenges";
import {
  formatDateFromTimestamp,
  getDayOfMonthFromTimestamp,
  getMonthAbbreviationFromTimestamp,
} from "@/utils/dates";

const avatars = [
  "https://static.valorantstats.xyz/agent-headshots/sova-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/reyna-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/deadlock-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/raze-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/cypher-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/sage-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/kayo-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/omen-headshot.png",
  "https://static.valorantstats.xyz/agent-headshots/viper-headshot.png",
];
export const Challenge = ({challenge}: {challenge: ChallengeType}) => {
  const arr = new Array(
    challenge.total_players < 10 ? challenge.total_players : 9,
  ).fill(null);
  console.log(arr);
  return (
    <div
      className={styles.challenge}
      style={{
        background: "linear-gradient(rgb(230, 73, 73), rgb(223, 112, 112))",
      }}
    >
      <div className={styles.backrgound}>
        <Image src={challenge.image} alt={""} height={1000} width={1000} />
      </div>
      <div className={styles.text}>
        <header>
          <div className={styles.calendar}>
            <h6>{getMonthAbbreviationFromTimestamp(challenge.start_date)}</h6>
            <h5>{getDayOfMonthFromTimestamp(challenge.start_date)}</h5>
          </div>
          <div className={styles.players}>
            <div className={styles.avatarWrapper}>
              {challenge.total_players > 1
                ? arr.map((w, i) => {
                    console.log(avatars[i]);
                    return (
                      <div
                        style={{
                          backgroundImage: `url(${avatars[i]})`,
                          right: `${i * 1.2}rem`,
                        }}
                      ></div>
                    );
                  })
                : null}
            </div>
            <span>
              {challenge.total_players}{" "}
              {challenge.total_players > 1 ? "players" : "player"}
            </span>
          </div>
        </header>
        <div className={styles.info}>
          <h5>{challenge.title}</h5>
          <span>{`${formatDateFromTimestamp(
            challenge.start_date,
          )} - ${formatDateFromTimestamp(challenge.end_date)}`}</span>
        </div>
      </div>
    </div>
  );
};

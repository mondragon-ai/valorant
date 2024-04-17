import Image from "next/image";
import styles from "../Pages.module.css";
import {ChallengeType} from "@/types/challenges";
import {
  calculateRemainingDays,
  calculateTimePercentageComplete,
  formatDateFromTimestamp,
  getDayOfMonthFromTimestamp,
  getMonthAbbreviationFromTimestamp,
} from "@/utils/dates";
import {Button} from "../../ui/Button";
import {MouseEvent, useState} from "react";

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
  const [isLoading, setLoading] = useState(false);
  const arr = new Array(
    challenge.total_players < 10 ? challenge.total_players : 9,
  ).fill(null);

  const percent = calculateTimePercentageComplete(
    challenge.start_date,
    challenge.end_date,
  );

  return (
    <div className={styles.challengeWrapper}>
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
            <div>
              <span>{challenge.joined ? "Joined" : "Not Joined"}</span>
            </div>
            <h5>{challenge.title}</h5>
            <span>{`${formatDateFromTimestamp(
              challenge.start_date,
            )} - ${formatDateFromTimestamp(challenge.end_date)}`}</span>
          </div>
        </div>
      </div>

      <div className={styles.challengeProgress}>
        <header style={{padding: "1.5rem 1rem 0.4rem 1rem"}}>
          <h6>Challenge Progress</h6>
          <span>Last Updated: 9 minutes ago</span>
        </header>
        <div>
          <div className={styles.progressInfo}>
            <div className={styles.text}>
              <h5>{challenge.title}</h5>
              <span>{`${
                challenge.started
                  ? calculateRemainingDays(challenge.end_date) + " left"
                  : "Starts in " + calculateRemainingDays(challenge.start_date)
              } ${
                challenge.started ? " - " + percent + "% completd" : "-"
              }`}</span>
            </div>
            <div className={styles.icon}></div>
          </div>

          <div className={styles.status}>
            <div>
              <span>You are in #130 place, ahead of 80% of players</span>
            </div>
          </div>

          <div className={styles.progressBar}>
            <div>
              <div style={{width: `${percent > 0 ? percent : 0}%`}}></div>
            </div>
          </div>

          <div className={styles.action}>
            <Button
              isDisabled={
                challenge.started ? true : challenge.joined ? true : false
              }
              text={
                challenge.started
                  ? "Unable to Join"
                  : challenge.joined
                  ? "Joined"
                  : "Join Now"
              }
              callback={(e) => {}}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

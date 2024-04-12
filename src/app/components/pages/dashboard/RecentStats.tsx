import Image from "next/image";
import styles from "../Pages.module.css";

export default function RecentStats() {
  return (
    <div className={styles.recentStatsContainer}>
      <div className={styles.background}>
        <Image
          src={
            "https://wallpapers.com/images/high/valorant-jett-red-boxes-vvov337nrcu66o8x.webp"
          }
          alt={""}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.fade}></div>

      <div className={styles.currRank}>
        <Image
          src={
            "https://tiermaker.com/images/chart/chart/valorant-ranks-iron-to-radiant-1517264/radiantpng.png"
          }
          alt={""}
          width={1000}
          height={1000}
        />
        <div className={styles.rankTxt}>
          <span>Current Rating</span>
          <h5>Radiant</h5>
        </div>
      </div>

      <div className={styles.recentMatchWrapper}>
        <span>Recent Match</span>
        <div className={styles.recentMatchContainer}>
          <Image
            src={
              "https://wallpapers.com/images/high/valorant-computer-v-metallic-claw-logo-exi5u3qu0f2lji5q.webp"
            }
            alt={""}
            width={1000}
            height={1000}
          />
          <div className={styles.item}>
            <span>K/D/A</span>
            <h5>18/13/2</h5>
          </div>
          <div className={styles.item}>
            <span>K/D</span>
            <h5>1.4</h5>
          </div>
          <div className={styles.item}>
            <span>Avg Score</span>
            <h5>420</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

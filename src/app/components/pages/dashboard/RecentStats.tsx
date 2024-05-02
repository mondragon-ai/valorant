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
          <h6>Current Rating</h6>
          <h4>Radiant</h4>
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
            <h6>K/D/A</h6>
            <h4>18/13/2</h4>
          </div>
          <div className={styles.item}>
            <h6>K/D</h6>
            <h4>1.4</h4>
          </div>
          <div className={styles.item}>
            <h6>Avg Score</h6>
            <h4>420</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

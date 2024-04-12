// import Image from "next/image";
import styles from "../Pages.module.css";

export default function MainStats() {
  return (
    <div className={styles.mainStatsContainer}>
      <h5 style={{padding: "0.5rem 1rem"}}>Main Stats</h5>
      <div className={styles.mainStats}>
        <div className={styles.item}>
          <span>K/D Ratio</span>
          <h5>1.62</h5>
        </div>
        <div className={styles.item}>
          <span>Damage/Round</span>
          <h5>180.3</h5>
        </div>
        <div className={styles.item}>
          <span>Score/Round</span>
          <h5>420.69</h5>
        </div>
        <div className={styles.item}>
          <span>W/L</span>
          <h5>380/249</h5>
        </div>
        <div className={styles.item}>
          <span>Kills/Round</span>
          <h5>1.5</h5>
        </div>
        <div className={styles.item}>
          <span>Headshot %</span>
          <h5>13.5</h5>
        </div>

        <div className={styles.item}>
          <span>Kills</span>
          <h5>4235</h5>
        </div>
        <div className={styles.item}>
          <span>Death</span>
          <h5>3485</h5>
        </div>
      </div>
    </div>
  );
}

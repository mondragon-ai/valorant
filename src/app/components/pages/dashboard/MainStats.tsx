// import Image from "next/image";
import styles from "../Pages.module.css";

export default function MainStats() {
  return (
    <div className={styles.mainStatsContainer}>
      <h3 style={{padding: "0.5rem 1rem"}}>Main Stats</h3>
      <div className={styles.mainStats}>
        <div className={styles.item}>
          <h6>K/D Ratio</h6>
          <h4>1.62</h4>
        </div>
        <div className={styles.item}>
          <h6>Damage/Round</h6>
          <h4>180.3</h4>
        </div>
        <div className={styles.item}>
          <h6>Score/Round</h6>
          <h4>420.69</h4>
        </div>
        <div className={styles.item}>
          <h6>W/L</h6>
          <h4>380/249</h4>
        </div>
        <div className={styles.item}>
          <h6>Kills/Round</h6>
          <h4>1.5</h4>
        </div>
        <div className={styles.item}>
          <h6>Headshot %</h6>
          <h4>13.5</h4>
        </div>

        <div className={styles.item}>
          <h6>Kills</h6>
          <h4>4235</h4>
        </div>
        <div className={styles.item}>
          <h6>Death</h6>
          <h4>3485</h4>
        </div>
      </div>
    </div>
  );
}

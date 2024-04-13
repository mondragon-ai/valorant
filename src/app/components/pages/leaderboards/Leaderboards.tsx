import styles from "../Pages.module.css";

export const Leaderboards = () => {
  return (
    <div className={styles.leaderboardWrapper}>
      <header>
        <h6 style={{width: "15%", marginLeft: "1rem"}}>Rank</h6>
        <h6 style={{width: "55%"}}>Player</h6>
        <h6 style={{width: "30%", background: "#4141411e"}}>Ranked Rating</h6>
      </header>
    </div>
  );
};

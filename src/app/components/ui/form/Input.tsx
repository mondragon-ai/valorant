import styles from "../UI.module.css";

const MobileInput: React.FC = () => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Enter your name" />
    </div>
  );
};

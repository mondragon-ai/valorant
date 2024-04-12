import styles from "./UI.module.css";

interface ButtonProps {
  text: string;
  callback: () => void;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({text, callback, width}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.btn} ${styles.flashSlide}`}
        style={{width: width}}
        onClick={() => callback()}
      >
        {text}
      </button>
    </div>
  );
};

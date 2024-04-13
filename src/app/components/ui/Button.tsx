import {MouseEvent} from "react";
import styles from "./UI.module.css";

interface ButtonProps {
  text: string;
  callback: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({text, callback, width}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.btn} ${styles.flashSlide}`}
        style={{width: width}}
        onClick={(e) => callback(e)}
      >
        {text}
      </button>
    </div>
  );
};

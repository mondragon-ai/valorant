import {MouseEvent} from "react";
import styles from "./UI.module.css";

interface ButtonProps {
  text: string;
  callback: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  width?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  callback,
  width,
  isLoading,
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.btn} ${styles.flashSlide}`}
        style={{width: width, cursor: isLoading ? "progress" : "pointer"}}
        onClick={(e) => callback(e)}
        disabled={isLoading}
      >
        {isLoading ? "loading..." : text}
      </button>
    </div>
  );
};

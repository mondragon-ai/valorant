import {MouseEvent} from "react";
import styles from "./UI.module.css";

interface ButtonProps {
  text: string;
  callback: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  width?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  callback,
  width,
  isLoading,
  isDisabled,
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.btn} ${styles.flashSlide} ${
          isLoading || isDisabled ? styles.disabled : ""
        }`}
        style={{
          width: width,
          cursor: isLoading
            ? "progress"
            : isDisabled
            ? "not-allowed"
            : "pointer",
        }}
        onClick={(e) => callback(e)}
        disabled={isLoading || isDisabled}
      >
        {isLoading ? "loading..." : text}
      </button>
    </div>
  );
};

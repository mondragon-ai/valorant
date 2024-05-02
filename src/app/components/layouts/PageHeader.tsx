// import Image from "next/image";
"use client";
import styles from "./Layout.module.css";
import {AppContextType} from "@/types/shared";

export const PageHeader = ({
  title,
  openMenu,
  isOpen,
  globalState,
}: {
  title: string;
  openMenu: () => void;
  isOpen: boolean;
  globalState: AppContextType;
}) => {
  const playerName = globalState.player ? globalState.player.name : "";
  return (
    <header className={styles.pageHeader}>
      <h2>{title}</h2>
      <div className={styles.profile}>
        <span>{playerName}</span>

        <div
          className={`${styles.hb} ${isOpen ? styles.open : ""}`}
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

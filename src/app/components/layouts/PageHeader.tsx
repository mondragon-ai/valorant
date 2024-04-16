// import Image from "next/image";
"use client";
import {useState} from "react";
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
      <h5>{title}</h5>
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

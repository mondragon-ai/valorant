// import Image from "next/image";
"use client";
import {useState} from "react";
import styles from "./Layout.module.css";

export const PageHeader = ({
  title,
  openMenu,
  isOpen,
}: {
  title: string;
  openMenu: () => void;
  isOpen: boolean;
}) => {
  return (
    <header className={styles.pageHeader}>
      <h5>{title}</h5>
      <div className={styles.profile}>
        <span>Mithrandir</span>

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

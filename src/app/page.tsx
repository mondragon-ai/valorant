"use client";
import MobileEnter from "./components/pages/enter/MobileEnter";
import {useWidth} from "./hooks/useWidth";
// import styles from "./page.module.css";

export default function Home() {
  const innerWidth = useWidth();
  return <>{innerWidth < 720 ? <MobileEnter /> : null}</>;
}

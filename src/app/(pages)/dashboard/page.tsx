"use client";
import styles from "../Pages.module.css";
import RecentStats from "@/app/components/pages/dashboard/RecentStats";
import MainStats from "@/app/components/pages/dashboard/MainStats";
import {TopAgents} from "@/app/components/pages/dashboard/TopAgents";
import {WeaponsRadar} from "@/app/components/pages/dashboard/WeaponsRadar";
import {RecentMatches} from "@/app/components/pages/dashboard/RecentMatches";
import {Footer} from "@/app/components/layouts/Footer";
import {PageHeader} from "@/app/components/layouts/PageHeader";
import {useState} from "react";
import {Sidebar} from "@/app/components/layouts/Sidebar";

export default function Dashboard() {
  const [isOpen, setOpen] = useState(true);

  const handleMenu = () => {
    console.log("clicked: " + (!isOpen == true ? "true" : "f"));
    setOpen(!isOpen);
  };

  return (
    <main
      className={styles.mainPage}
      style={{position: isOpen ? "fixed" : "relative"}}
    >
      <Sidebar isOpen={isOpen} />
      <PageHeader title="Performance" openMenu={handleMenu} isOpen={isOpen} />
      <RecentStats />
      <MainStats />
      <TopAgents />
      <WeaponsRadar />
      <RecentMatches />
      <Footer />
    </main>
  );
}

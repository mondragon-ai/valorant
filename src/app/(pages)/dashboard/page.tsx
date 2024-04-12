import Image from "next/image";
import styles from "../Pages.module.css";
import RecentStats from "@/app/components/pages/dashboard/RecentStats";
import MainStats from "@/app/components/pages/dashboard/MainStats";
import {TopAgents} from "@/app/components/pages/dashboard/TopAgents";

export default function Dashboard() {
  return (
    <main className={styles.mainPage}>
      <header>
        <h5>Performance</h5>
        <div className={styles.profile}>
          <span>Mithrandril</span>
          <div>
            <Image
              src={
                "https://wallpapers.com/images/high/valorant-computer-v-metallic-claw-logo-exi5u3qu0f2lji5q.webp"
              }
              alt={""}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </header>
      <RecentStats />
      <MainStats />
      <TopAgents />
    </main>
  );
}

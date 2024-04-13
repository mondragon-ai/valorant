import styles from "../Pages.module.css";
import RecentStats from "@/app/components/pages/dashboard/RecentStats";
import MainStats from "@/app/components/pages/dashboard/MainStats";
import {TopAgents} from "@/app/components/pages/dashboard/TopAgents";
import {WeaponsRadar} from "@/app/components/pages/dashboard/WeaponsRadar";
import {RecentMatches} from "@/app/components/pages/dashboard/RecentMatches";
import {Footer} from "@/app/components/layouts/Footer";
import {PageHeader} from "@/app/components/layouts/PageHeader";

export default function Dashboard() {
  return (
    <main className={styles.mainPage}>
      <PageHeader title="Performance" />
      <RecentStats />
      <MainStats />
      <TopAgents />
      <WeaponsRadar />
      <RecentMatches />
      <Footer />
    </main>
  );
}

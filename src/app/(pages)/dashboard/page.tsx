"use client";
import styles from "../Pages.module.css";
import RecentStats from "@/app/components/pages/dashboard/RecentStats";
import MainStats from "@/app/components/pages/dashboard/MainStats";
import {TopAgents} from "@/app/components/pages/dashboard/TopAgents";
import {WeaponsRadar} from "@/app/components/pages/dashboard/WeaponsRadar";
import {RecentMatches} from "@/app/components/pages/dashboard/RecentMatches";
import {Footer} from "@/app/components/layouts/Footer";
import {PageHeader} from "@/app/components/layouts/PageHeader";
import {useEffect, useState} from "react";
import {Sidebar} from "@/app/components/layouts/Sidebar";
import {useRouter} from "next/navigation";
import {isAuthenticated} from "@/lib/auth";
import {useGlobalContext} from "@/lib/context/appSession";
import {useHeight} from "@/app/hooks/useWidth";

export default function Dashboard() {
  const {globalState} = useGlobalContext();
  const innerHeight = useHeight();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = await isAuthenticated();
      if (!token) {
        router.push("/");
      }
    };
    checkAuth();
  }, []);

  return (
    <main
      className={styles.mainPage}
      style={{
        position: isOpen ? "fixed" : "relative",
        height: `${innerHeight}px`,
      }}
    >
      <Sidebar isOpen={isOpen} globalState={globalState} />
      <PageHeader
        title="Performance"
        openMenu={handleMenu}
        isOpen={isOpen}
        globalState={globalState}
      />
      <RecentStats />
      <MainStats />
      <TopAgents />
      <WeaponsRadar />
      <RecentMatches />
      <Footer />
    </main>
  );
}

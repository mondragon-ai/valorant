"use client";
import styles from "../Pages.module.css";
import {Footer} from "@/app/components/layouts/Footer";
import {PageHeader} from "@/app/components/layouts/PageHeader";
import {useEffect, useState} from "react";
import {Sidebar} from "@/app/components/layouts/Sidebar";
import {useRouter} from "next/navigation";
import {isAuthenticated} from "@/lib/auth";
import {useGlobalContext} from "@/lib/context/appSession";
import {ChallengeList} from "@/app/components/pages/challenges/ChallengeList";
import {ChallengeType} from "@/types/challenges";
import {ChallengeLeaderboard} from "@/app/components/pages/challenges/ChallengeLeaderboard";
import {useHeight} from "@/app/hooks/useWidth";

export default function Challenges() {
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
        title="Challenges"
        openMenu={handleMenu}
        isOpen={isOpen}
        globalState={globalState}
      />
      <ChallengeList challenges={challenges} />
      <ChallengeLeaderboard />
      <Footer />
    </main>
  );
}

const challenges = [
  {
    started: true,
    eligable: false,
    avatars: [""],
    title: "Kill / Death Challenge (Current)",
    start_date: 1711940400,
    end_date: 1714446000,
    joined: true,
    total_players: 7,
    image:
      "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
    current_place: 0,
  },
  {
    started: false,
    eligable: false,
    avatars: [""],
    title: "Kill / Death Challenge (Next Month)",
    start_date: 1714532400,
    end_date: 1717124400,
    joined: false,
    total_players: 7,
    image:
      "https://wallpapers.com/images/high/valorant-player-poster-xbh2vt247ch07ps6.webp",
    current_place: 0,
  },
] as ChallengeType[];

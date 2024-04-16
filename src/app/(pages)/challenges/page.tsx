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

export default function Challenges() {
  const {globalState} = useGlobalContext();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = await isAuthenticated();
      console.log(token);
      if (!token) {
        router.push("/");
      }
    };
    checkAuth();
  }, []);

  return (
    <main
      className={styles.mainPage}
      style={{position: isOpen ? "fixed" : "relative"}}
    >
      <Sidebar isOpen={isOpen} globalState={globalState} />
      <PageHeader
        title="Challenges"
        openMenu={handleMenu}
        isOpen={isOpen}
        globalState={globalState}
      />
      <ChallengeList challenges={challenges} />
      <Footer />
    </main>
  );
}

const challenges = [
  {
    started: false,
    eligable: false,
    avatars: [""],
    title: "Kill / Death Challenge (weekly)",
    start_date: 1713287686,
    end_date: 1713398400,
    joined: false,
    total_players: 7,
    image:
      "https://dotesports.com/wp-content/uploads/2022/06/23014617/VALORANT_YR1_KeyArt_4k_3_.0-1.jpg",
    current_place: 0,
  },
  {
    started: false,
    eligable: false,
    avatars: [""],
    title: "Kill / Death Challenge (Monthly)",
    start_date: 1713287686,
    end_date: 1713398400,
    joined: false,
    total_players: 7,
    image:
      "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
    current_place: 0,
  },
] as ChallengeType[];

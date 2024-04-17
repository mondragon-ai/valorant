"use client";
import styles from "../Pages.module.css";
import {Select} from "@/app/components/ui/form/Select";
import {MouseEvent, useEffect, useState} from "react";
import {Leaderboards} from "@/app/components/pages/leaderboards/Leaderboards";
import {Button} from "@/app/components/ui/Button";
import {Pagination} from "@/app/components/pages/leaderboards/Pagination";
import {Footer} from "@/app/components/layouts/Footer";
import {PageHeader} from "@/app/components/layouts/PageHeader";
import {Sidebar} from "@/app/components/layouts/Sidebar";
import {useRouter} from "next/navigation";
import {isAuthenticated} from "@/lib/auth";
import {useGlobalContext} from "@/lib/context/appSession";
// import {useHeight} from "@/app/hooks/useWidth";
import {serverApiRequest} from "@/third-party-apis/server";
import {
  RankedLeaderboardPlayers,
  RankedLeaderboardResponse,
} from "@/types/leaderboards";

const regions = [
  {label: "North America", value: "na"},
  {label: "Europe", value: "eu"},
  {label: "Korea", value: "kr"},
  {label: "Brazil", value: "br"},
  {label: "Latin America", value: "latam"},
  {label: "Oceania", value: "ap"},
];

const seasons = [
  {label: "EPISODE 8: ACT 2", value: "22d10d66-4d2a-a340-6c54-408c7bd53807"},
  {label: "EPISODE 8: ACT 4", value: "843cc465-4f0a-7466-ccda-19a427f8e478"},
];
export default function Leaderboard() {
  const {globalState, setGlobalState} = useGlobalContext();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [err, setError] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [leaderboard, setLeaderboard] = useState(
    globalState.leaderboards.players,
  );

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

  const [args, setArgs] = useState({
    region: "ap",
    season: "22d10d66-4d2a-a340-6c54-408c7bd53807",
  });

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  const initFetch = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setLoading(true);
    const {status, data} = await serverApiRequest(
      `/leaderboards/ranked/${args.region}/${args.season}`,
      "GET",
      null,
    );
    if (status === 200) {
      const leaderboard = data as {leaderboard: RankedLeaderboardResponse};
      setLeaderboard(leaderboard.leaderboard.players);
      setIndex(50);
      setError("");
      setGlobalState({...globalState, leaderboards: data.leaderboard});
    } else if (status === 500) {
      setError("Try again later");
    } else if (status === 403 || status === 401) {
      setError("Unathorized");
      router.push("/");
    } else if (status > 403) {
      setError("Problem fetching data");
    }
    setLoading(false);
  };

  const nextFetch = async () => {
    setLoading(true);
    const {status, data} = await serverApiRequest(
      `/leaderboards/ranked/${args.region}/${args.season}/next/${index}`,
      "GET",
      null,
    );
    if (status === 200) {
      const leaderboard = data as {leaderboard: RankedLeaderboardResponse};
      setLeaderboard(leaderboard.leaderboard.players);
      setGlobalState({...globalState, leaderboards: data.leaderboard});
      setIndex(index + 50);
      setError("");
    } else if (status === 500) {
      setError("Try again later");
    } else if (status === 403 || status === 401) {
      setError("Unathorized");
      router.push("/");
    } else if (status > 403) {
      setError("Problem fetching data");
    }
    setLoading(false);
  };

  const prevFetch = async () => {
    setLoading(true);
    const {status, data} = await serverApiRequest(
      `/leaderboards/ranked/${args.region}/${args.season}/prev/${index}`,
      "GET",
      null,
    );
    if (status === 200) {
      const leaderboard = data as {leaderboard: RankedLeaderboardResponse};
      setLeaderboard(leaderboard.leaderboard.players);
      setGlobalState({...globalState, leaderboards: data.leaderboard});
      setIndex(index - 50);
      setError("");
    } else if (status === 500) {
      setError("Try again later");
    } else if (status === 403 || status === 401) {
      setError("Unathorized");
      router.push("/");
    } else if (status > 403) {
      setError("Problem fetching data");
    }
    setLoading(false);
  };

  return (
    <main
      className={styles.mainPage}
      style={{
        position: isOpen ? "fixed" : "relative",
        minHeight: isOpen ? "calc(100vh - 20px)" : "",
      }}
    >
      <Sidebar globalState={globalState} isOpen={isOpen} />
      <div className={styles.mainSection}>
        <PageHeader
          openMenu={handleMenu}
          isOpen={isOpen}
          title="Leaderboard"
          globalState={globalState}
        />

        <div className={styles.selectHeader}>
          <Select
            name={"region"}
            label={"Region"}
            options={regions}
            formData={args}
            setFormData={setArgs}
          />
          <Select
            name={"season"}
            label={"Season"}
            options={seasons}
            formData={args}
            setFormData={setArgs}
          />
          <Button
            text={"Show Stats"}
            callback={(e) => initFetch(e)}
            isLoading={isLoading}
          />
          <span style={{padding: "1rem 0 5px 0"}}>
            Last updated: 9 minutes ago
          </span>
          <h5 style={{padding: "0 0 15px 0"}}>
            North America Competitive Ranked Rating for Episode 2 - Act 1
            Leaderboard
          </h5>
        </div>

        <Leaderboards leaderboard={leaderboard} />
        <Pagination next={nextFetch} prev={prevFetch} />
        <Footer />
      </div>
    </main>
  );
}

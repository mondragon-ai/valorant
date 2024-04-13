"use client";
import Image from "next/image";
import styles from "../Pages.module.css";
import {Select} from "@/app/components/ui/form/Select";
import {useState} from "react";
import {Leaderboards} from "@/app/components/pages/leaderboards/Leaderboards";

const regions = [
  {label: "North America", value: "na1"},
  {label: "Europe", value: "eu1"},
  {label: "Korea", value: "kr"},
  {label: "Brazil", value: "br"},
  {label: "Latin America", value: "latam"},
  {label: "Japan", value: "jp"},
  {label: "Oceania", value: "ap"},
  {label: "Turkey", value: "tr"},
  {label: "Russia", value: "ru"},
  {label: "South East Asia", value: "sea"},
];

const seasons = [
  {label: "EPISODE 2: ACT 1", value: "22d10d66-4d2a-a340-6c54-408c7bd53807"},
  {label: "EPISODE 2: ACT 2", value: "239u8y23-3rn3-a340-6c54-024ry229378y"},
  {label: "EPISODE 2: ACT 3", value: "ab89d766-4d2a-a340-6c54-123a5bf65892"},
  {label: "EPISODE 2: ACT 4", value: "327dj62a-3r2s-a340-6c54-27s6hd82m363"},
  {label: "EPISODE 2: ACT 5", value: "9b23u74d-1k0r-a340-6d54-234t5y327894"},
  {label: "EPISODE 3: ACT 1", value: "e728u3d7-7r2k-a340-6b54-183m7t6392kd"},
  {label: "EPISODE 3: ACT 2", value: "5b82d83u-0r23-a340-6f54-47t2i93nd834"},
  {label: "EPISODE 3: ACT 3", value: "23n8jdm3-1k4h-a340-6e54-9283j4n93m8d"},
];
export default function Leaderboard() {
  const [args, setArgs] = useState({
    region: "",
    season: "",
  });
  return (
    <main className={styles.mainPage}>
      <header>
        <h5>Leaderboard</h5>
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
        <span style={{paddingBottom: "5px"}}>Last updated: 9 minutes ago</span>
        <h5>
          North America Competitive Ranked Rating for Episode 2 - Act 1
          Leaderboard
        </h5>
      </div>

      <Leaderboards />
    </main>
  );
}
"use client";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "../Pages.module.css";

const data = [
  {
    subject: "Phantom",
    kills: 1200,
    fullMark: 2000,
  },
  {
    subject: "Vandal",
    kills: 1500,
    fullMark: 2000,
  },
  {
    subject: "Operator",
    kills: 1700,
    fullMark: 2000,
  },
  {
    subject: "Guardian",
    kills: 1000,
    fullMark: 2000,
  },
  {
    subject: "Spectre",
    kills: 800,
    fullMark: 2000,
  },
];

export const WeaponsRadar = () => {
  return (
    <>
      <div className={styles.chartWrapper}>
        <h3>Top Weapons</h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <circle cx="50%" cy="50%" r="30%" fill="rgba(0, 0, 0, 0.1)" />
            <circle cx="50%" cy="50%" r="25%" fill="rgba(0, 0, 0, 0.15)" />
            <circle cx="50%" cy="50%" r="20%" fill="rgba(0, 0, 0, 0.2)" />
            <circle cx="50%" cy="50%" r="15%" fill="rgba(0, 0, 0, 0.25)" />
            <circle cx="50%" cy="50%" r="10%" fill="rgba(0, 0, 0, 0.3)" />
            <circle cx="50%" cy="50%" r="5%" fill="rgba(0, 0, 0, 0.35)" />
            {/* Add 'kills' underneath the 'subject' inside the PolarAngleAxis */}
            {/* <PolarAngleAxis dataKey="subject" /> */}
            <PolarAngleAxis
              dataKey="subject"
              // type="number"
              // domain={[0, "dataMax"]}
              // angle={90}
              tickFormatter={(value) => `${value}`}
            />
            <PolarAngleAxis dataKey="kills" />
            <Radar
              dot={true}
              dataKey="kills"
              fill="rgb(230, 73, 73)"
              fillOpacity={0.3}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const CustomTooltip: React.FC<any> = (props) => {
  const {active, payload} = props;
  if (active && payload && payload.length) {
    return <p>{`${payload[0].payload.kills} Kills`}</p>;
  }
  return null;
};

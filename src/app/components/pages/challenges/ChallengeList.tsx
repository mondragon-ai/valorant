import {ChallengeType} from "@/types/challenges";
import styles from "../Pages.module.css";
import {Challenge} from "./Challenge";
import {useWidth} from "@/app/hooks/useWidth";

export const ChallengeList = ({challenges}: {challenges: ChallengeType[]}) => {
  const innerWidth = useWidth();
  return (
    <section
      className={styles.topAgentsWrapper}
      style={{paddingBottom: "0rem"}}
    >
      <div
        className={styles.agentContainer}
        style={{justifyContent: innerWidth < 720 ? "" : "space-between"}}
      >
        {challenges &&
          challenges.map((ch, i) => {
            return <Challenge key={i} challenge={ch} />;
          })}
      </div>
    </section>
  );
};

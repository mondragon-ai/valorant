import {ChallengeType} from "@/types/challenges";
import styles from "../Pages.module.css";
import {Challenge} from "./Challenge";

export const ChallengeList = ({challenges}: {challenges: ChallengeType[]}) => {
  return (
    <section
      className={styles.topAgentsWrapper}
      style={{paddingBottom: "2rem"}}
    >
      <div className={styles.agentContainer}>
        {challenges &&
          challenges.map((ch, i) => {
            return <Challenge key={i} challenge={ch} />;
          })}
      </div>
    </section>
  );
};

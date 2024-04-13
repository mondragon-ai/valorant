import Image from "next/image";
import styles from "./Layout.module.css";

export const PageHeader = ({title}: {title: string}) => {
  return (
    <header className={styles.pageHeader}>
      <h5>{title}</h5>
      <div className={styles.profile}>
        <span>Mithrandir</span>
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
  );
};

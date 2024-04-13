import Image from "next/image";
import styles from "./Layout.module.css";

export const Sidebar = ({isOpen}: {isOpen: boolean}) => {
  return (
    <article className={`${styles.sidebar} ${isOpen ? "" : styles.closed}`}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image
            src={
              "https://wallpapers.com/images/high/valorant-computer-v-metallic-claw-logo-exi5u3qu0f2lji5q.webp"
            }
            alt={""}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.name}>
          <h5>Mithandir</h5>
          <span>uau</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>profile</li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </nav>
    </article>
  );
};

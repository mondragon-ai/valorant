import Image from "next/image";
import styles from "./Layout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGears,
  faMedal,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-regular-svg-icons";
import {serverApiRequest} from "@/third-party-apis/server";
import {useRouter} from "next/navigation";
import {useGlobalContext} from "@/lib/context/appSession";
import {initGlobalValues} from "@/lib/data/initial";
import {AppContextType} from "@/types/shared";
import Cookies from "js-cookie";
import {useWidth} from "@/app/hooks/useWidth";

export const Sidebar = ({
  isOpen,
  globalState,
}: {
  isOpen: boolean;
  globalState: AppContextType;
}) => {
  const {setGlobalState} = useGlobalContext();
  const innerWidth = useWidth();
  const router = useRouter();

  const handleLogout = async () => {
    await serverApiRequest("/auth/logout", "POST", null);
    setGlobalState(initGlobalValues);
    Cookies.remove("devve_jwt", {path: "/"});
    router.push("/");
  };

  const playerName = globalState.player ? globalState.player.name : "";
  const playerEmail = globalState.player ? globalState.player.email : "";

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
          <h5>{playerName}</h5>
          <span>{playerEmail}</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/dashboard">
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faAddressCard}
                  size={innerWidth < 720 ? "1x" : "2x"}
                />
              </div>
              <h5>Profile</h5>
            </a>
          </li>
          <li>
            <a href="/leaderboard">
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faMedal}
                  size={innerWidth < 720 ? "1x" : "2x"}
                />
              </div>
              <h5>Leaderboard</h5>
            </a>
          </li>
          <li>
            <a href="/challenges">
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size={innerWidth < 720 ? "1x" : "2x"}
                />
              </div>
              <h5>Challenges</h5>
            </a>
          </li>
        </ul>
        <ul style={{marginBottom: innerWidth < 720 ? "30px" : ""}}>
          <li style={{marginBottom: "10px"}}>
            <a href="/">
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faGears}
                  size={innerWidth < 720 ? "1x" : "2x"}
                />
              </div>
              <h5>Settings</h5>
            </a>
          </li>
          <li style={{marginBottom: "10px", cursor: "pointer"}}>
            <a onClick={() => handleLogout()}>
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  size={innerWidth < 720 ? "1x" : "2x"}
                />
              </div>
              <h5>Logout</h5>
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
};

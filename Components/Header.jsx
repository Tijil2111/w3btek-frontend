import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id={styles.header}>
      <div id={styles.title} className={styles.navLink}>
        TuneSmith
      </div>

      <div>
        <FontAwesomeIcon icon={faBars} id={styles.icon} />
        <ul className={styles.navList}>
          <li className={`${styles.navListItem}`}>
            <Link href="/features">
              <div className={styles.navLink}>Our Features</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`}>
            <Link href="/products">
              <div className={styles.navLink}>Products</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`}>
            <Link href="/reviews">
              <div className={styles.navLink}>Reviews</div>
            </Link>
          </li>
          <li className={`${styles.navListItem}`} id={styles.lastItem}>
            <Link href="/contact">
              <div id={styles.contactBtn}>Contact Us</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

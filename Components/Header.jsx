import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div id={styles.header} className={open ? styles.mobileHeader : ""}>
      <div id={open ? styles.closeHeading : ""}>
        <Link href="/" className={styles.navLink}>
          <div
            id={styles.title}
            className={`${styles.navLink} ${open ? styles.mobileTitle : ""}`}
          >
            TuneSmith
          </div>
        </Link>

        <FontAwesomeIcon
          onClick={() => setOpen(false)}
          icon={faTimes}
          id={styles.icon}
          className={!open ? styles.hidden : styles.iconVisible}
        />
      </div>

      <div>
        <FontAwesomeIcon
          onClick={() => setOpen(true)}
          icon={faBars}
          id={styles.icon}
          className={open ? styles.hidden : styles.iconVisible}
        />
        <ul className={styles.navList} id={open ? styles.mobileOpen : ""}>
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

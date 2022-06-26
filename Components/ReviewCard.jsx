import { useEffect } from "react";
import styles from "../styles/Card.module.css";

export default function ReviewCard({ name, message }) {
  return (
    <div id={styles.card}>
      <div id={styles.top}>
        <img id={styles.picture} className="picture" src="/pfp.png" />
        <div id={styles.name}>{name}</div>
      </div>
      <div id={styles.question}>
        <b>{message}</b>
      </div>
    </div>
  );
}

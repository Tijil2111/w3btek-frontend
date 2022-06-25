import { useEffect } from "react";
import styles from "../styles/Card.module.css";

export default function ReviewCard({ name, message }) {
  useEffect(() => {
    document.querySelectorAll(".picture").forEach((picture) => {
      const r = Math.floor(Math.random() * (255 - 120)) + 120;
      const g = Math.floor(Math.random() * (255 - 120)) + 120;
      const b = Math.floor(Math.random() * (255 - 120)) + 120;
      picture.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }, []);
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

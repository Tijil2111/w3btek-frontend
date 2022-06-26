import { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Card({ name, messages, date, id, link }) {
  return (
    // <Link href={`/forum/${id}`}>
    <div id={styles.card}>
      <div id={styles.top}>
        <img id={styles.picture} className="picture" src="/pfp.png" />
        <div id={styles.name}>{name}</div>
      </div>
      <div id={styles.question}>
        <b>{`Q -> ${messages[0]}`}</b>
      </div>
      <div id={styles.answers}>{`Number of Answers -> ${
        messages.length - 1
      }`}</div>
      <div id={styles.date}>{`Thread started at -> ${date}`}</div>
      <div id={styles.date}>
        <Link href={link}>{`See More....`}</Link>
      </div>
    </div>
    // </Link>
  );
}

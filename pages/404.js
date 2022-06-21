import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div id={styles.container}>
      <h1 id={styles.heading}>404</h1>
      <h2 id={styles.sub}>Page not Found</h2>
    </div>
  );
}

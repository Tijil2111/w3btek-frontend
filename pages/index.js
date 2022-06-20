import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TuneSmith</title>
        <meta
          name="description"
          content="We are supercharging the modern music"
        />
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.sideTitle}>
          <div className={styles.text1}>Your</div>
          <div className={styles.text1}>Gateway</div>
          <div className={styles.text1}>
            to <span className={styles.text2}>Music</span>
          </div>
          <div className={styles.subDiv}>
            <div className={styles.subText}>Join the community where we</div>
            <div className={styles.subText}>
              make things that helps you feel
            </div>
            <div className={styles.subText}>the tune</div>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button}>Shop Now</button>
          </div>
        </div>
        <img src="/music1.svg" className={styles.image}></img>
      </div>
    </div>
  );
}

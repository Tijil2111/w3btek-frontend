import Head from "next/head";
import styles from "../styles/Home.module.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
      <div className={styles.div1}>
        <div className={styles.title}>
          <div>
            Vibing To <span className={styles.primaryColor}>Music</span> Just
            Got Easier
          </div>
        </div>
        <div className={styles.sub}>
          <div>
            Powered by Music, Felt by all, Made By Professionals, For
            Professionals.
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.shop}>Shop Now</button>
        </div>
        <img src="/headphonesGif.gif" className={styles.gif}></img>
        <div className={styles.sub1}>
          Tested by artists across the world, TuneSmith turns music into an
          emotion you can feel.
        </div>

        <div className={styles.title1}>
          <div>
            Focus On <span className={styles.primaryColor}>Music</span> Rather
            Than Quality
          </div>
        </div>
        <div className={styles.sub2}>
          Spend less time adjusting the quality of your gear, and more time on
          vibing to the music you like, to vibe to the music you live for.
        </div>
        <img src="/headphones.jpeg" height={500}></img>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
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
          vibing to the music you like, vibing to the music you live for.
        </div>
        <img src="/headphones.jpeg" height={500}></img>
        <div className={styles.title1}>
          <div>
            <span className={styles.primaryColor}>Support </span> For All
          </div>
        </div>
        <div className={styles.sub2}>
          Our gear integrates directly into your devices without any hassle be
          it Android, iOS etc.
        </div>
        <div className={styles.supportRow}>
          <div className={styles.card}>
            <img
              src="https://pbs.twimg.com/profile_images/1164525925242986497/N5_DCXYQ_400x400.jpg"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>Android</div>
          </div>
          <div className={styles.card}>
            <img
              src="https://play-lh.googleusercontent.com/7oYf_DNF77eJr9bIoY_GuN1OmYbgQL2VkZLTUfVI4TAspf8qdSjeJpIYbNQe-Va3FJlk"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>iOS</div>
          </div>
          <div className={styles.card}>
            <img
              src="https://pbs.twimg.com/profile_images/1164525925242986497/N5_DCXYQ_400x400.jpg"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>Android</div>
          </div>
        </div>
      </div>
    </div>
  );
}

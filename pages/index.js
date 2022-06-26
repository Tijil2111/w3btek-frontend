/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

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
            <span className={styles.primaryColor}>Music</span> Goes On and On
          </div>
        </div>
        <div className={styles.sub2}>
          Spend less time adjusting the quality of your gear, and more time on
          vibing to the music you like, vibing to the music you live for.
        </div>
        <img src="/headphones.jpeg" height={500}></img>
        <div className={styles.title}>
          <div>
            What We Have <span className={styles.primaryColor}>Achieved</span>
          </div>
        </div>
        <div className={styles.supportRow}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.achivementTitle}>50+</div>
                <div className={styles.achivementSub}>Countries</div>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardSub}>
                  We have successfully launched our company in 50+ Countries
                </div>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.achivementTitle}>10 Million +</div>
                <div className={styles.achivementSub}>Customers</div>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardSub}>
                  Our products are so loved that people keep buying them
                </div>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.achivementTitle}>10+</div>
                <div className={styles.achivementSub}>Awards</div>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.cardSub}>
                  Our company has been awarded the most prestigious awards in
                  the field of Music Gear
                </div>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
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
              src="https://blogs.windows.com/wp-content/uploads/prod/2020/08/windows-logo-social.png"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>Windows</div>
          </div>
          <div className={styles.card}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/MacOS_logo_%282017%29.svg/800px-MacOS_logo_%282017%29.svg.png"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>macOS</div>
          </div>
          <div className={styles.card}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/640px-Tux.svg.png"
              height={150}
              className={styles.cardImg}
            ></img>
            <div className={styles.cardTitle}>Linux</div>
          </div>
        </div>

        <div className={styles.title}>
          <div>
            <span className={styles.primaryColor}>Listen </span>Confidently In
            High Noise
          </div>
        </div>
        <div className={styles.sub2}>
          Whether you are at a boring party, or in a public transpart our gear
          is all set. Noise cancelling is our first priority. Our cheapest gear
          also comes with it.
        </div>
        <img src="/noise.gif" className={styles.gif}></img>
      </div>
    </div>
  );
}

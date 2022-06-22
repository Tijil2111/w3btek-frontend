import Head from "next/head";
import styles from "../styles/Home.module.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Features from "../Components/Features";

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
            <Link href="/products">
              <button className={styles.button}>Shop Now</button>
            </Link>
          </div>
        </div>
        <img src="/music1.svg" className={styles.image}></img>
      </div>
      <Features />
      <div className={styles.achievementsDiv}>
        <div className={styles.mobileTitle}>Achievements</div>
        <div id={styles.data}>
          <div className={styles.achievementsSide}>
            <div className={styles.achivementsTitle}>Achievements</div>
            <FontAwesomeIcon
              icon={faTrophy}
              size="2x"
              className={styles.achievementsIcon}
            />
          </div>
          <div className={styles.achievementsCards}>
            <div className={styles.achievementsCard}>
              <div className={styles.achievementTitle}>
                In <span className={styles.primaryColor}>Top 3</span> Music Wear
                Producers
              </div>
              <div className={styles.achievementDesc}>
                In 2021, TuneSmith gained the 2nd position in the Top 3 music
                wear producers, being second to Bose.
              </div>
            </div>
            <div>
              <div className={styles.achievementsCard1}>
                <div className={styles.achievementTitle}>
                  Awarded <span className={styles.primaryColor}>MTV</span> Best
                  Music Wear Producer
                </div>
                <div className={styles.achievementDesc}>
                  In 2022, TuneSmith was awarded the MTV Best Music Wear
                  Producer of the year award.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timelineDiv}>
        <div className={styles.timelineTitle}>Our Journey !</div>

        <div className={styles.timeline}>
          <div className={styles.timelineBox}>
            <div className={styles.purpleBox}></div>
            <div className={styles.purpleColor}>India</div>
          </div>
          <div className={styles.blueBox}></div>
          <div className={styles.timelineBox}>
            <div className={styles.blueBox}></div>
            <div className={styles.blueColor}>Japan</div>
          </div>
          <div className={styles.blueBox}></div>
          <div className={styles.redBox}></div>
          <div className={styles.timelineBox}>
            <div className={styles.redBox}></div>
            <div className={styles.redColor}>USA</div>
          </div>
          <div className={styles.redBox}></div>
          <div className={styles.redBox}></div>
          <div className={styles.blueBox}></div>
          <div className={styles.timelineBox}>
            <div className={styles.blueBox}></div>
            <div className={styles.blueColor}>UK</div>
          </div>
          <div className={styles.greenBox}></div>
          <div className={styles.timelineBox}>
            <div className={styles.greenBox}></div>
            <div className={styles.greenColor}>World Wide</div>
          </div>
          <div className={styles.greenBox}></div>
          <div className={styles.PS}>
            <div className={styles.purpleBox}></div>= 1 month
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className={styles.learnDiv}>
        <div>
          <div className={styles.learnHead}>Learn how TuneSmith</div>
          <div className={styles.learnHead1}>
            can change <span className={styles.primaryColor}>music</span>
          </div>
          <div className={styles.learnSubHead}>Music is made to be felt</div>
        </div>
        <div>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
          <div className={styles.dot4}></div>
        </div>
        <div className={styles.features}>
          <div className={styles.featuresDiv}>
            <div className={styles.featureTitle}>
              Feel <span className={styles.primaryColor}>Music</span> Like Never
              Before
            </div>
            <div className={styles.featureDesc}>
              We make products used by artists so that the can feel their
              creations. Taylor Swift, Arjit Singh are a few to name.
            </div>
            <div className={styles.featureDesc}>
              Why dont you level up your music ?
            </div>
          </div>
          <div className={styles.features1Div}>
            <div className={styles.featureTitle}>
              Feel <span className={styles.primaryColor}>More</span> Do{" "}
              <span className={styles.primaryColor}>More</span>
            </div>
            <div className={styles.featureDesc}>
              Our Products create an environment that enables you to vibe to the
              latest music and increases your productivity
            </div>
          </div>
          <div className={styles.featuresDiv}>
            <div className={styles.featureTitle}>
              Top <span className={styles.primaryColor}>Notch</span> Support
            </div>
            <div className={styles.featureDesc}>
              Have an issue ? Cant set up your sound bar ?
            </div>
            <div className={styles.featureDesc}>
              Contact our team thorugh the contact page and we will send a
              technician to your place !
            </div>
          </div>
        </div>
      </div>

      <div className={styles.achievementsDiv}>
        <div className={styles.mobileTitle}>Achievements</div>
        <div className={styles.achievementsSide}>
          <div className={styles.achivementsTitle}>Achievements</div>
          <FontAwesomeIcon
            icon={faTrophy}
            size="2x"
            className={styles.achievementsIcon}
          />
        </div>
        <div className={styles.achievementsCards}>
          <div>he</div>
          <div>yo</div>
        </div>
      </div>
    </div>
  );
}

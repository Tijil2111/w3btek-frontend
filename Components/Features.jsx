import React from "react";
import styles from "../styles/Features.module.css";

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.titleDiv}>
        <div className={styles.title}>Music Gear That </div>
        <div className={styles.title}>
          {" "}
          Changes the <span className={styles.primaryColor}>Feel</span>
        </div>
      </div>
      <div className={styles.aboutDiv}>
        <div className={`${styles.aboutTitle}`}>About Us</div>
        <div className={styles.aboutDesc}>
          Established in 2019, TuneSmith is on the most successful Music Tech
          Producer. With an annual sales of more 1 Billion Dollars, we are
          competiting with bose to be the giant of Music Tech Production. This
          company was opened in a collaboration by two masterminds
          <span className={styles.primaryColor}>- Tijil and Shaurya</span>
        </div>
      </div>
      <div className={styles.featuresDiv}>
        <div className={styles.featureDiv}>
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
        <div className={styles.featureDiv}>
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
      </div>
    </div>
  );
}

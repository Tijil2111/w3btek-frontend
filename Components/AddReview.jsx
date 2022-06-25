import React from "react";
import styles from "../styles/Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function AddReview({ close }) {
  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.main}>
          <img src="/side.png" height={700} className={styles.img}></img>

          <div className={styles.side}>
            <div className={styles.title}>Review Us ! </div>
            <div className={styles.sub1}>
              Why dont you write a review for us ?
            </div>
            <div>
              <form className={styles.form}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Name"
                  required
                  name="name"
                />

                <textarea
                  type="text"
                  className={styles.message}
                  placeholder="Your Message"
                  required
                  name="description"
                />

                <button className={styles.submitButton} type="submit">
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            className={styles.icon}
            onClick={close}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.mobileDiv}>
          <div className={styles.sideMobile}>
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              className={styles.icon}
              onClick={close}
            ></FontAwesomeIcon>
            <div className={styles.title}>Review Us ! </div>
            <div className={styles.sub1}>
              Why dont you write a review for us ?
            </div>
            <div>
              <form className={styles.form}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Name"
                  required
                  name="name"
                />

                <textarea
                  type="text"
                  className={styles.message}
                  placeholder="Your Message"
                  required
                  name="description"
                />

                <button className={styles.submitButton} type="submit">
                  Submit{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

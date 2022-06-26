import React from "react";
import styles from "../styles/Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { server_link } from "../SERVER_LINK.json";
import { useState } from "react";

export default function AddReview({ close }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitReview = async () => {
    const response = await fetch(`${server_link}/api/reviews`, {
      method: "POST",
      body: JSON.stringify({ name: name, message, message }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <textarea
                type="text"
                className={styles.message}
                placeholder="Your Message"
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className={styles.submitButton} type="submit">
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.mobileDiv}>
        <div className={styles.sideMobile}>
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
                value={name}
              />

              <textarea
                type="text"
                className={styles.message}
                placeholder="Your Message"
                required
                name="description"
                value={message}
              />

              <button className={styles.submitButton} type="submit">
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

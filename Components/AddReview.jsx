import React from "react";
import styles from "../styles/Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { server_link } from "../SERVER_LINK.json";
import { useState } from "react";
import Head from "next/head";

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
    <div className={styles.addReview}>
      <Head>
        <title>Add Review - TuneSmith</title>
      </Head>
      <div>
        <div className={styles.box}>
          <img src="/side.png" className={styles.reviewImg}></img>
          <div className={styles.side}>
            <div className={styles.title}>Review Us ! </div>
            <div className={styles.sub}>
              Why dont you leave some words for us ?
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
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your Email"
                  required
                  name="email"
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

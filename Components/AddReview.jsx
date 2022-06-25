import React from "react";
import styles from "../styles/Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { server_link } from "../SERVER_LINK.json";
import { useState } from "react";

export default function AddReview({ close }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addData = () => {
    var url = "https://w3btek-backend.herokuapp.com/api/reviews";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    };

    var data = { name: name, message: message };

    xhr.send(data);
  };
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
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  type="text"
                  className={styles.message}
                  placeholder="Your Message"
                  required
                  name="description"
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button
                  className={styles.submitButton}
                  type="submit"
                  onClick={() => {
                    addData();
                  }}
                >
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

                <button
                  className={styles.submitButton}
                  type="submit"
                  onClick={() => {
                    addData();
                  }}
                >
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

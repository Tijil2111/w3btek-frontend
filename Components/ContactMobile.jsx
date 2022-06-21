import React from "react";
import styles from "../styles/Contact.module.css";

export default function ContactMobile() {
  return (
    <>
      <div className={styles.contactMobile}>
        <div className={styles.contactSide}>
          <div className={styles.title}>Contact us</div>
          <div className={styles.sub}>
            Have any queries? Contact us right now from here, we’ll look into
            your queries.
          </div>
          <div>
            <form
              action="https://formsubmit.co/tijil2008@gmail.com"
              method="POST"
              className={styles.form}
            >
              <input
                type="text"
                className={styles.input}
                placeholder="Name"
                required
                name="name"
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Email"
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
    </>
  );
}

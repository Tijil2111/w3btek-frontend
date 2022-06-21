import React from "react";
import ContactBox from "../Components/ContactBox";
import ContactMobile from "../Components/ContactMobile";
import styles from "../styles/Contact.module.css";

export default function contactPage() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.heading}>Contact</div>
        <ContactBox />
        <ContactMobile />
      </div>
    </>
  );
}

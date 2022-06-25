import React from "react";
import ReviewCard from "../Components/ReviewCard";
import { server_link } from "../SERVER_LINK.json";
import { useState } from "react";
import styles from "../styles/Reviews.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import AddReview from "../Components/AddReview";

export default function Reviews({ reviews }) {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className={styles.reviewPage}>
      <Head>
        <title>Reviews - TuneSmith</title>
      </Head>

      <div className={styles.topDiv}>
        <div className={styles.title}>Reviews</div>
        <div className={styles.sub}>
          This is what our customers say about us
        </div>
        <div className={styles.buttonDiv}>
          {" "}
          <div className={styles.add} onClick={openModal}>
            Add +
          </div>
          <div className={styles.penOuter} onClick={openModal}>
            <FontAwesomeIcon
              icon={faPen}
              size="2x"
              className={styles.pen}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        {reviews.map((reviewData, id) => {
          return (
            <ReviewCard
              key={id}
              name={reviewData.name}
              message={reviewData.message}
            />
          );
        })}
      </div>
      {modal ? <AddReview close={closeModal} /> : <div></div>}
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(`${server_link}/api/reviews`);
  const reviews = await response.json();

  return {
    props: {
      reviews,
    },
  };
}

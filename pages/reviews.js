import React from "react";
import ReviewCard from "../Components/ReviewCard";
import { server_link } from "../SERVER_LINK.json";
import Link from "next/link";
import styles from "../styles/Reviews.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ reviews }) {
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
          <Link href="/addReview">
            <div className={styles.add}>Add + </div>
          </Link>
          <div className={styles.penOuter} href="/addReview">
            <Link href="/addReview">
              <FontAwesomeIcon
                icon={faPen}
                size="2x"
                className={styles.pen}
              ></FontAwesomeIcon>
            </Link>
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

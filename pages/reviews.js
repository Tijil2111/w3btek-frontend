import React from "react";
import ReviewCard from "../Components/ReviewCard";
import { server_link } from "../SERVER_LINK.json";
import styles from "../styles/Reviews.module.css";

export default function reviews({ reviews }) {
  return (
    <>
      <div></div>
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
    </>
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

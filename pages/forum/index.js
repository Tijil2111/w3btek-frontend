import styles from "../../styles/Forum.module.css";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { server_link } from "../../SERVER_LINK.json";
import Card from "../../Components/Card";

export default function Forum({ threads }) {
  const [topic, setTopic] = useState("");

  const [renderedThreads, setRenderedThreads] = useState(
    JSON.parse(JSON.stringify(threads))
  );

  useEffect(() => {
    const updatedThreads = threads.filter((thread) =>
      thread.messages[0].toLowerCase().includes(topic.toLowerCase())
    );
    setRenderedThreads(updatedThreads);
  }, [topic]);

  return (
    <>
      <Head>
        <title>Community Forum - Tunesmith</title>
      </Head>
      <div id={styles.container}>
        <h1 id={styles.title}>Community</h1>
        <div id={styles.topContainer}>
          <input
            id={styles.input}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="Search for a Topic"
          />
          <FontAwesomeIcon icon={faSearch} id={styles.icon} />
        </div>
        <h1 id={styles.heading}>All Topics</h1>
        <div id={styles.cards}>
          {renderedThreads.map((thread) => {
            return (
              <Link key={thread._id} href={"/forum/" + thread._id}>
                <Card
                  name={thread.name}
                  messages={thread.messages}
                  date={thread.date}
                  id={thread._id}
                  link={"/forum/" + thread._id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${server_link}/api/forum`);
  const threads = await response.json();

  return {
    props: {
      threads,
    },
  };
};

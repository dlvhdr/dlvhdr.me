import React from "react";
import BlueskyIcon from "../../components/Icons/BlueskyIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import Layout from "../../components/Layout/Layout";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <Layout className={styles.root} showBack={false}>
      <div className={styles.content}>
        <h1>Reach Out!</h1>
        <p>
          You can reach me by email at <code>dolevc2[at]gmail.com</code>.
        </p>
        <p>I'm also sporadically available on these platforms:</p>
        <div className={styles.links}>
          <a
            href="https://github.com/dlvhdr"
            target="_blank"
            rel="noreferrer"
            aria-label="@dlvhdr GitHub Account"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dolev-hadar/"
            target="_blank"
            rel="noreferrer"
            aria-label="Dolev Hadar's LinkedIn Account"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://bsky.app/profile/dlvhdr.me"
            target="_blank"
            rel="noreferrer"
            aria-label="@dlvhdr Bluesky Account"
          >
            <BlueskyIcon />
            Bluesky
          </a>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export const siteTitle = "Dolev Hadar";

type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children, home = false }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.dlvhdr}>
          <Link href="/">
            <a>DLVHDR</a>
          </Link>
        </div>
        <a href="https://twitter.com/elys1um" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/dlvhdr" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/dolev-hadar/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </nav>
      <main className={styles.mainContent}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </div>
      )}
      <div className={styles.email}>
        dolevc2@gmail.com
        <br />
        &copy; 2020-present Dolev Hadar. All Rights Reserved.
      </div>
    </div>
  );
}

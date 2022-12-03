import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import RssIcon from "../Icons/RssIcon";
import SunIcon from "../Icons/SunIcon";
import MoonIcon from "../Icons/MoonIcon";
import { useTheme } from "../../context/ThemeContext";
import classNames from "classnames";

export const siteTitle = "Dolev Hadar";

type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
  wide?: boolean;
};

export default function Layout({
  children,
  home = false,
  wide = false,
}: LayoutProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={classNames(styles.container, { [styles.wide]: wide })}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.dlvhdr}>
            <Link href="/">
              <a>DLVHDR</a>
            </Link>
          </div>
          <a href="/rss/feed.xml" target="_blank" rel="noreferrer">
            <RssIcon />
          </a>
          <a href="https://twitter.com/dlvhdr" target="_blank" rel="noreferrer">
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
          <button
            className={styles.themeButton}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
      <main className={styles.mainContent}>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back</a>
            </Link>
          </div>
        )}
      </main>
      <div className={styles.email}>
        dolevc2@gmail.com
        <br />
        &copy; 2020-present Dolev Hadar. All Rights Reserved.
      </div>
    </div>
  );
}

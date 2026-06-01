import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import RssIcon from "../Icons/RssIcon";
import SunIcon from "../Icons/SunIcon";
import MoonIcon from "../Icons/MoonIcon";
import { useTheme } from "../../context/ThemeContext";
import classNames from "classnames";

export const siteTitle = "Dolev Hadar";

type LayoutProps = {
  children: React.ReactNode;
  showBack?: boolean;
  wide?: boolean;
  className?: string;
  navClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
};

export default function Layout({
  children,
  className,
  contentClassName,
  navClassName,
  footerClassName,
  showBack: showBack = false,
  wide = false,
}: LayoutProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div
        className={classNames(
          styles.container,
          { [styles.wide]: wide },
          className,
        )}
      >
        <nav className={classNames(styles.nav, navClassName)}>
          <div className={styles.navContainer}>
            <div className={styles.dlvhdr}>
              <Link href="/" aria-label="Go to home page">
                DLVHDR
              </Link>
            </div>
            <div className={styles.primaryLinks}>
              <Link
                href="/uses"
                className={styles.link}
                aria-label="What hardware and software I use"
              >
                /uses
              </Link>
              <Link
                href="/links"
                className={styles.link}
                aria-label="A bunch of links to content/sites/videos/blogs I found interesting"
              >
                /links
              </Link>
              <Link
                href="/contact"
                className={styles.link}
                aria-label="Contact me"
              >
                /contact
              </Link>
            </div>
            <a
              href="/rss/feed.xml"
              target="_blank"
              rel="noreferrer"
              aria-label="RSS Feed"
            >
              <RssIcon size="small" />
            </a>
            <a
              href="https://github.com/dlvhdr"
              target="_blank"
              rel="noreferrer"
              aria-label="@dlvhdr GitHub Account"
            >
              <GithubIcon size="small" />
            </a>
            <button
              className={styles.themeButton}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle Light/Dark Theme"
            >
              {theme === "light" ? (
                <SunIcon size="small" />
              ) : (
                <MoonIcon size="small" />
              )}
            </button>
          </div>
        </nav>
        <main className={classNames(styles.mainContent, contentClassName)}>
          {children}
          {showBack && (
            <div className={styles.backToHome}>
              <Link href="/">← Back</Link>
            </div>
          )}
        </main>
        <footer className={classNames(styles.email, footerClassName)}>
          &copy; 2020-present Dolev Hadar. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

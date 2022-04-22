import styles from "./blockQuote.module.css";
import React from "react";

export default function BlockQuote({
  children,
}: JSX.IntrinsicElements["blockquote"]) {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
}

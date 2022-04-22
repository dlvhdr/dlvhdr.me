import React from "react";
import styles from "./figcaption.module.css";

export default function Figcaption({
  children,
}: JSX.IntrinsicElements["figcaption"]) {
  return <figcaption className={styles.figcaption}>{children}</figcaption>;
}

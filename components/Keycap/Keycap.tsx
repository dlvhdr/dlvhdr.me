import React from "react";
import styles from "./keycap.module.css";

export default function Keycap({ children }: JSX.IntrinsicElements["kbd"]) {
  return <kbd className={styles.keycap}>{children}</kbd>;
}

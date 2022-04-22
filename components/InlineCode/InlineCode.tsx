import styles from "./inlineCode.module.css";
import React from "react";

export default function InlineCode({
  children,
  ...props
}: JSX.IntrinsicElements["code"]) {
  return (
    <code {...props} className={styles.inlineCode}>
      {children}
    </code>
  );
}

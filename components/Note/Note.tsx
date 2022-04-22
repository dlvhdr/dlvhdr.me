import React from "react";
import styles from "./note.module.css";

type NoteProps = {
  children: string;
};

export default function Note({ children, ...otherProps }: NoteProps) {
  return (
    <aside className={styles.note} {...otherProps}>
      {children}
    </aside>
  );
}

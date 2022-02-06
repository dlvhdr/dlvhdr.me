import React from "react";
import Link from "next/link";
import Date from "../Date";
import utilStyles from "../../styles/utils.module.css";
import styles from "./postPreview.module.css";

type PostPreviewProps = {
  id: string;
  title: string;
  date: string;
  preface: string;
};

export default function PostPreview({
  id,
  title,
  date,
  preface,
}: PostPreviewProps) {
  return (
    <li className={styles.root}>
      <div className={styles.title}>
        <Link href={`/posts/${id}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <span className={utilStyles.subtext}>
          <Date dateString={date} />
        </span>
      </div>
      <p>{preface}</p>
    </li>
  );
}

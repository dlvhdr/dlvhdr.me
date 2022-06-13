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
        <h2>
          <Link href={`/posts/${id}`} passHref={true}>
            <a>{title}</a>
          </Link>
        </h2>
        <span className={utilStyles.subtext}>
          <Date dateString={date} />
        </span>
      </div>
      <p>{preface}</p>
    </li>
  );
}

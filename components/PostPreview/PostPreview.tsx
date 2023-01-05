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
    <article className={styles.root}>
      <section className={styles.titleContainer}>
        <h2 className={styles.titleText}>
          <Link href={`/posts/${id}`} passHref={true}>
            {title}
          </Link>
        </h2>
        <span className={utilStyles.subtext}>
          <Date dateString={date} />
        </span>
      </section>
      <p className={styles.preface}>{preface}</p>
    </article>
  );
}

import React from "react";
import utilStyles from "../../styles/utils.module.css";
import styles from "./sidebar.module.css";
import Link from "next/link";
import styleUtils from "../../styles/utils.module.css";
import Date from "../Date";
import { PostData } from "../../lib/posts";
import classNames from "classnames";

type SidebarProps = {
  className?: string;
  posts: Array<PostData>;
};

export default function Sidebar({ className, posts }: SidebarProps) {
  return (
    <aside className={classNames(styles.root, className)}>
      <h4 className={utilStyles.headingMd}>Posts</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span className={styles.date}>
              <Date dateString={post.date} />
            </span>
            <Link href={`/posts/${post.id}`} className={styleUtils.headingSm}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

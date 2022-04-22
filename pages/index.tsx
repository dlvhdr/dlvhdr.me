import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, PostData } from "../lib/posts";
import PostPreview from "../components/PostPreview/PostPreview";
import styles from "./index.module.css";
import classNames from "classnames";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type HomeProps = {
  allPostsData: PostData[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.posts}>
          <div className={classNames(styles.postsList, utilStyles.list)}>
            <h1 className={styles.blogTitle}>Blog Posts 📖</h1>
            <ul>
              {allPostsData.map((post) => (
                <PostPreview key={post.id} {...post} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

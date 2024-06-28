import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, PostData } from "../lib/posts";
import PostPreview from "../components/PostPreview/PostPreview";
import styles from "./index.module.css";
import classNames from "classnames";
import generateRssFeed from "../lib/generateRssFeed";
import Link from "next/link";

type HomeProps = {
  allPostsData: PostData[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta
          key="desc"
          name="description"
          content="Dolev Hadar's personal website. I'm a web developer who sometimes likes to write about code."
        />
      </Head>
      <Layout
        home={true}
        contentClassName={classNames(styles.posts, styles.mainContent)}
      >
        <section className={classNames(styles.postsList, utilStyles.list)}>
          <h2 className={styles.title}>About me</h2>
          <section className={styles.aboutMe}>
            <p>
              Hello, I'm Dolev!{" "}
              <img
                width="24px"
                height="24px"
                src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
              />
            </p>
            <p>
              I'm a full-stack engineer with a front-end orientation, currently
              located in Tel Aviv, Israel.
            </p>
            <p className={styles.resume}>
              <i>
                For more info about my technical skills and experience, check
                out my <Link href={"/resume"}>resume</Link>.
              </i>
            </p>
          </section>
          <h2 className={styles.title}>Blog Posts</h2>
          <section className={styles.postPreviews}>
            {allPostsData.map((post) => (
              <PostPreview key={post.id} {...post} />
            ))}
          </section>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  await generateRssFeed();

  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

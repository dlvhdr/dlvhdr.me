import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, PostData } from "../lib/posts";
import PostPreview from "../components/PostPreview/PostPreview";
import Sidebar from "../components/Sidebar/Sidebar";
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
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Hey, I&apos;m <span className={styles.primary}>Dolev</span>
          </h1>
          <div className={styles.description}>
            <p>
              I&apos;m a{" "}
              <span className={styles.primary}>frontend engineer</span> and
              wishful UI Designer.
            </p>
            <p>I love to build websites and learn new stuff.</p>
          </div>
        </section>
        <section className={styles.posts}>
          <div className={classNames(styles.postsList, utilStyles.list)}>
            <h2 className={styles.blogTitle}>Blog</h2>
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

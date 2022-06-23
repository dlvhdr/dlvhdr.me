import React from "react";
import Layout from "../../components/Layout/Layout";
import Date from "../../components/Date";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { MDXRemote } from "next-mdx-remote";
import styles from "./post.module.css";
import InlineCode from "../../components/InlineCode/InlineCode";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import Keycap from "../../components/Keycap/Keycap";
import BlockQuote from "../../components/BlockQuote/BlockQuote";
import Figcaption from "../../components/Figcaption/Figcaption";
import Note from "../../components/Note/Note";

type PostProps = {
  postData: PostData;
};

const components = {
  code: InlineCode,
  pre: CodeBlock,
  blockquote: BlockQuote,
  Figcaption,
  Keycap,
  Note,
};

export default function Post({ postData }: PostProps) {
  const { title, date, source, preface } = postData;
  return (
    <>
      <Head>
        <title>{title} | Dolev Hadar</title>
        <meta key="desc" name="description" content={preface} />
      </Head>
      <Layout home={false}>
        <article className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={utilStyles.subtext}>
              <Date dateString={date} />
            </div>
          </div>
          <MDXRemote {...source} components={components} />
        </article>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type StaticPropsParms = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: StaticPropsParms): Promise<{
  props: PostProps;
}> {
  return {
    props: {
      postData: await getPostData(params.id),
    },
  };
}

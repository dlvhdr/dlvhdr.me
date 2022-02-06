import Layout from "../../components/Layout/Layout";
import Date from "../../components/Date";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { MDXRemote } from "next-mdx-remote";
import styles from "./post.module.css";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import classNames from "classnames";

type PostProps = {
  postData: PostData;
};

type CodeProps = {
  children: string;
  className?: string;
};

const components = {
  inlineCode: ({ children }: CodeProps) => {
    return <code className={styles.inlineCode}>{children}</code>;
  },
  code: ({ children, className }: CodeProps) => {
    const language = className?.replace(/^language-/, "") ?? "markdown";
    return (
      <Highlight
        {...defaultProps}
        theme={nightOwlLight}
        code={children.trim()}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={classNames(className, styles.code)}
            style={{ color: style.color?.toString() }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

export default function Post({ postData }: PostProps) {
  const { title, date, source } = postData;
  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
      </Head>
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

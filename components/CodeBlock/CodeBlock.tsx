import styles from "./codeBlock.module.css";
import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import classNames from "classnames";

type CodeBlockProps = JSX.IntrinsicElements["pre"] & {
  children: {
    props: {
      className: string;
      children: React.ReactNode;
    };
  };
};

export default function CodeBlock({ children }: CodeBlockProps) {
  const language = children?.props?.className?.replace("language-", "") || null;
  const trimmed = children?.props?.children.trim();
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlLight}
      code={trimmed}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.root}>
          <div className={styles.language}>{language}</div>
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
        </div>
      )}
    </Highlight>
  );
}

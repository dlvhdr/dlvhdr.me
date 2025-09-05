import styles from "./codeBlock.module.css";
import React from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import classNames from "classnames";
import { useTheme } from "../../context/ThemeContext";

export default function CodeBlock({ children }: JSX.IntrinsicElements["pre"]) {
  const { theme } = useTheme();
  // @ts-ignore
  const language = children?.props?.className?.replace("language-", "") || null;
  // @ts-ignore
  const trimmed = children?.props?.children.trim();

  return (
    // @ts-ignore
    <Highlight
      theme={theme === "light" ? themes.nightOwlLight : themes.nightOwl}
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

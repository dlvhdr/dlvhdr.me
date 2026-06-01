import React from "react";
import styles from "./enhance.module.css";

export const Enhance = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://gh-dash.dev/enhance" className="no-underline!">
        <div className="rounded-lg flex h-full w-full flex-row items-start gap-8 border border-(--separator) p-4 px-6 no-underline hover:bg-(--card-color)">
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex flex-row">
              <pre className={styles.enhance}>
                ▐▔▔▐▚ ▌▐ ▌▐▔▌▐▚ ▌▐▔▔▐▔▔
                <br />
                ▐▛▁▐ ▚▌▐▔▌▐▔▌▐ ▚▌▐▁▁▐▛▁
              </pre>
              <div className={styles.stars}>186 ⭐</div>
            </div>
            <p className="mt-4! ml-1 p-0 text-md font-normal text-(--primary-color)">
              A Blazingly Fast Terminal UI for GitHub Actions
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

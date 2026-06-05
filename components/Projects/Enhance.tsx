import React from "react";
import styles from "./enhance.module.css";
import common from "./common.module.css";

export const Enhance = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://gh-dash.dev/enhance" className="no-underline!">
        <div className={common.card}>
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex flex-row">
              <pre className={styles.enhance}>
                ▐▔▔▐▚ ▌▐ ▌▐▔▌▐▚ ▌▐▔▔▐▔▔
                <br />
                ▐▛▁▐ ▚▌▐▔▌▐▔▌▐ ▚▌▐▁▁▐▛▁
              </pre>
              <div className={common.stars}>186 ⭐</div>
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

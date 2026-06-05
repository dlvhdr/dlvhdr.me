import React from "react";
import styles from "./dash.module.css";
import common from "./common.module.css";

export const Dash = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://gh-dash.dev" target="_blank" className="no-underline!">
        <div className={common.card}>
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex flex-row">
              <pre className={styles.dash}>
                ▜▔▚▐▔▌▚▔▐ ▌
                <br />
                ▟▁▞▐▔▌▁▚▐▔▌
              </pre>
              <div className={common.stars}>12k ⭐</div>
            </div>
            <p className="mt-4! ml-1 p-0 text-md font-normal text-(--primary-color)">
              A rich terminal UI for GitHub that doesn't break your flow
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

import React from "react";
import styles from "./dash.module.css";

export const Dash = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://gh-dash.dev" target="_blank" className="no-underline!">
        <div className="rounded-lg flex w-full flex-row items-center gap-8 border border-(--separator) p-4 px-6 no-underline hover:bg-(--card-color)">
          <div className="flex flex-col gap-4 w-full">
            <div className="inline-flex flex-row">
              <pre className={styles.dash}>
                ▜▔▚▐▔▌▚▔▐ ▌
                <br />
                ▟▁▞▐▔▌▁▚▐▔▌
              </pre>
              <div className={styles.stars}>12k ⭐</div>
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

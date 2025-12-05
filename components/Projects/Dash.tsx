import React from "react";
import styles from "./dash.module.css";

export const Dash = ({}) => {
  return (
    <div>
      <a href="https://gh-dash.dev" target="_blank" className="!no-underline">
        <div className="rounded-lg flex w-full flex-row items-center gap-8 border border-[var(--separator)] p-4 px-6 no-underline hover:bg-[var(--card-color)] md:w-max">
          <div className="flex flex-col gap-4">
            <div className="inline-flex flex-col">
              <pre className={styles.dash}>
                ▜▔▚▐▔▌▚▔▐ ▌
                <br />
                ▟▁▞▐▔▌▁▚▐▔▌
              </pre>
              <p className="!mt-4 ml-1 p-0 text-sm text-(--primary-color) tracking-wide">
                A rich terminal UI for GitHub that doesn't break your flow
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

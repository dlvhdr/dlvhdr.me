import React from "react";
import styles from "./enhance.module.css";

export const Enhance = ({}) => {
  return (
    <div className="py-4">
      <a href="https://gh-dash.dev/enhance" className="!no-underline">
        <div className="rounded-lg flex w-full flex-row items-center gap-8 border border-[var(--separator)] p-4 px-6 no-underline hover:bg-[var(--card-color)] md:w-max">
          <div className="flex flex-col gap-4">
            <div className="inline-flex flex-col">
              <pre className={styles.enhance}>
                ▐▔▔▐▚ ▌▐ ▌▐▔▌▐▚ ▌▐▔▔▐▔▔
                <br />
                ▐▛▁▐ ▚▌▐▔▌▐▔▌▐ ▚▌▐▁▁▐▛▁
              </pre>
              <p className="!mt-4 ml-1 p-0 text-sm text-[var(--primary-color)]">
                A Blazingly Fast Terminal UI for GitHub Actions
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

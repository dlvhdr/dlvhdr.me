import React from "react";
import styles from "./enhance.module.css";

export const Enhance = ({}) => {
  return (
    <div>
      <a href="https://gh-dash.dev/enhance" className="no-underline!">
        <div className="rounded-lg flex w-full flex-row items-center gap-8 border border-(--separator) p-4 px-6 no-underline hover:bg-(--card-color) md:w-max">
          <div className="flex flex-col gap-4">
            <div className="inline-flex flex-col">
              <pre className={styles.enhance}>
                ▐▔▔▐▚ ▌▐ ▌▐▔▌▐▚ ▌▐▔▔▐▔▔
                <br />
                ▐▛▁▐ ▚▌▐▔▌▐▔▌▐ ▚▌▐▁▁▐▛▁
              </pre>
              <p className="mt-4! ml-1 p-0 text-sm text-(--primary-color) tracking-wide">
                A Blazingly Fast Terminal UI for GitHub Actions
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

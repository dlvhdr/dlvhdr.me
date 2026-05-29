import React from "react";
import styles from "./diffnav.module.css";

export const Diffnav = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://github.com/dlvhdr/diffnav" className="no-underline!">
        <div className="rounded-lg flex w-full flex-row items-center gap-8 border border-(--separator) p-4 px-6 no-underline hover:bg-(--card-color)">
          <div className="flex flex-col gap-4">
            <div className="inline-flex flex-col">
              <pre aria-label="DIFFNAV ASCII Logo" className={styles.diffnav}>
                ▜▔▚ ▌▐▔▔▐▔▔▐▚ ▌▐▔▌▐ ▞
                <br />
                ▟▁▞ ▌▐▔ ▐▔ ▐ ▚▌▐▔▌▐▞
              </pre>
              <p className="mt-4! ml-1 p-0 text-md font-normal text-(--primary-color)">
                A git diff pager based on delta but with a file tree, à la
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

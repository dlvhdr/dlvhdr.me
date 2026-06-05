import React from "react";
import styles from "./diffnav.module.css";
import common from "./common.module.css";

export const Diffnav = ({}) => {
  return (
    <div className="h-full w-full">
      <a href="https://github.com/dlvhdr/diffnav" className="no-underline!">
        <div className={common.card}>
          <div className="inline-flex flex-col w-full">
            <div className="inline-flex flex-row">
              <pre aria-label="DIFFNAV ASCII Logo" className={styles.diffnav}>
                ▜▔▚ ▌▐▔▔▐▔▔▐▚ ▌▐▔▌▐ ▞
                <br />
                ▟▁▞ ▌▐▔ ▐▔ ▐ ▚▌▐▔▌▐▞
              </pre>
              <div className={common.stars}>1.4k ⭐</div>
            </div>
            <p className="mt-4! ml-1 p-0 text-md font-normal text-(--primary-color)">
              A git diff pager based on delta but with a file tree, à la GitHub.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

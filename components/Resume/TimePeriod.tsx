import React from "react";
import styles from "./styles.module.css";
import utilStyles from "../../styles/utils.module.css";
import classNames from "classnames";

type Props = {
  name: string;
  years: [number, number];
  children: React.ReactNode;
};

export default function TimePeriod(props: Props) {
  const { name, years, children } = props;
  return (
    <div className={classNames(styles.root, styles.timePeriodRoot)}>
      <div className={styles.timelinePointAnchor}>
        <h4>{name}</h4>
      </div>
      <span className={classNames(utilStyles.subtext, styles.years)}>
        {years[0]} - {years[1]}
      </span>
      <p>{children}</p>
    </div>
  );
}

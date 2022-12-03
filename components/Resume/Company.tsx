import React from "react";
import utilStyles from "../../styles/utils.module.css";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  name: string;
  icon?: React.ReactNode;
  years: [number, number];
  role: string;
  technologies: string[];
  children?: React.ReactNode;
};

export default function Company(props: Props) {
  const { name, years, role, children, technologies } = props;
  return (
    <section className={styles.root}>
      <span className={classNames(utilStyles.subtext, styles.years)}>
        {years[0]} - {years[1]}
      </span>
      <div className={styles.timelinePointAnchor}>
        <h3>{name}</h3>
        <span>{role}</span>
      </div>
      <span className={classNames(utilStyles.subtext, styles.yearsSmall)}>
        {years[0]} - {years[1]}
      </span>
      <ul className={styles.technologies}>
        {technologies.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      {children}
    </section>
  );
}

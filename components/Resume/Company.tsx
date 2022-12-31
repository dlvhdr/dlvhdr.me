import React from "react";
import utilStyles from "../../styles/utils.module.css";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  name: string;
  icon?: React.ReactNode;
  years: [number, number] | [number];
  role: string;
  technologies: string[];
  children?: React.ReactNode;
};

export default function Company(props: Props) {
  const { name, years, role, children, technologies } = props;
  return (
    <section className={styles.root}>
      <div className={styles.companyHeader}>
        <h3>{name}</h3>
        <span>{role}</span>
        <span className={classNames(utilStyles.subtext, styles.yearsSmall)}>
          {years[0]} - {years?.[1] || "Current"}
        </span>
      </div>
      <ul className={styles.technologies}>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {children}
    </section>
  );
}

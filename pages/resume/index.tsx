import React from "react";
import GithubIcon from "../../components/Icons/GithubIcon";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import Layout from "../../components/Layout/Layout";
import Company from "../../components/Resume/Company";
import TimePeriod from "../../components/Resume/TimePeriod";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <Layout home={true}>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">
        Download PDF
      </a>
      <div className={styles.root}>
        <h1>Dolev Hadar</h1>
        <div className={styles.headerInfo}>
          <span className={styles.headerInfoBit}>
            <img src="images/location.svg" height="20px" width="20px" />
            Tel Aviv, Israel
          </span>
          <span className={styles.headerInfoBit}>
            <img src="images/email.svg" height="20px" width="20px" />
            dolevc2@gmail.com
          </span>
          <span className={styles.headerInfoBit}>
            <LinkedInIcon size="small" />
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/dolev-hadar/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </span>
          <span className={styles.headerInfoBit}>
            <GithubIcon size="small" />
            <a
              className={styles.linkedin}
              href="https://github.com/dlvhdr"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
        <h2>Summary</h2>
        <ul>
          <li>
            Full stack engineer with 10 years of experience in global hi-tech
            companies
          </li>
          <li>
            Front end oriented with extensive knowledge in TypeScript, React,
            React Native, GraphQL, Relay, Redux etc.
          </li>
          <li>Backend skills include Node.js, Go, Bash, Docker etc.</li>
          <li>
            Self learner, can lead projects from planning to execution, team
            player
          </li>
        </ul>
        <div>
          <h2>Projects</h2>
          <div className={styles.githubProject}>
            <h3>gh-dash</h3>
            <span className={styles.stars}>⭐ 3k</span>
          </div>
          <p>
            A GitHub CLI extension to display a dashboard with pull requests and
            issues by filters you care about.
          </p>
          <p className={styles.githubProjectLink}>
            <GithubIcon size="small" />
            <a
              className={styles.linkedin}
              href="https://github.com/dlvhdr/gh-dash"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <h2>Experience</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineLeft}></div>
          <div>
            <Company
              name="Wix"
              years={[2021, 2023]}
              role="Front End Developer"
              technologies={[
                "React",
                "Redux",
                "Node.js",
                "Typescript",
                "Serverless",
                "gRPC",
                "Docker",
                "Grafana",
                "Microfrontends",
              ]}
            >
              <h5>Velo</h5>
              <p className={styles.companyDesc}>
                <a
                  href="https://www.wix.com/velo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Velo
                </a>{" "}
                is a full-stack development platform that empowers you to
                rapidly build, manage and deploy professional web apps.
              </p>
              <ul>
                <li>
                  Worked on the Velo online IDE and implemented autocompletions,
                  linting
                </li>
                <li>
                  Led the project to auto-update type definitions for Wix NPM
                  packages <i>(was previously done manually)</i>
                </li>
                <li>
                  Initiated and led the project to migrate from a simple monaco
                  based IDE to an on-demand containerized online VSCode
                </li>
                <li>
                  Pushed implementing a modern programming model and helped the
                  developer team
                </li>
              </ul>
            </Company>
            <Company
              name="Facebook"
              years={[2016, 2021]}
              role="Full Stack Developer"
              technologies={[
                "React",
                "Redux",
                "GraphQL",
                "Relay",
                "React Native",
                "Go",
                "Node.js",
                "Hack (PHP dialect)",
                "Android",
                "Docker",
                "Kibana",
                "Storybook",
              ]}
            >
              <h5>FBC Symphony</h5>
              <p className={styles.companyDesc}>
                <a
                  href="https://www.facebook.com/connectivity/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FBC Symphony
                </a>{" "}
                is an open source SaaS solution for network operators that helps
                them operate their network in regards to device and customer
                management.
              </p>
              <ul>
                <li>
                  Acted as the project’s lead front-end engineer, writing the
                  majority of the UI’s infrastructure, web-app and React-Native
                  Android app
                </li>
                <li>
                  Ramped up on the open source tech-stack, outside the FB infra:
                  Git, Github, Docker, Kibana, Grafana, AWS, Go.
                </li>
                <li>
                  Created the{" "}
                  <a
                    href="https://github.com/magma/fbc-js-core/tree/main/fbcnms-packages/fbcnms-ui/components/design-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB Connectivity Design System
                  </a>{" "}
                  - drove the project of building a library of reusable base
                  components
                </li>
              </ul>
              <h5>Express Wi-Fi</h5>
              <p className={styles.companyDesc}>
                <a
                  href="https://expresswifi.fb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express Wi-Fi
                </a>{" "}
                is a super-fast super-affordable internet service for the un-and
                under-connected areas of the world (1M DAU)
              </p>
              <ul>
                <li>
                  Worked on the customer, retailer and partner portals
                  (webapps). Sole developer of the React-Native{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.expresswifi.customer&pli=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Android app
                  </a>
                  .
                </li>
                <li>
                  A standout project was implementing an extensible slice and
                  dice query UI that allowed creating custom queries over
                  various metrics and entity tables (customers, retailers,
                  etc.).
                </li>
              </ul>
            </Company>
            <Company
              name="Intel"
              role="Software Engineer Intern"
              years={[2013, 2016]}
              technologies={[
                "C#",
                "C++",
                "Qt",
                "WPF",
                "MVVM",
                "PrimeFaces",
                "JavaScript",
                "HTML",
                "CSS",
              ]}
            >
              <p>
                Worked at the CAD department on various projects: a Cache
                Simulator Windows desktop app in C++ using Qt for the GUI, a
                Thermal Analysis Platform for smartphones and a
                Power/performance web-app using PrimeFaces.
              </p>
            </Company>
            <h2>Education</h2>
            <TimePeriod name="Technion University" years={[2012, 2016]}>
              BSc. in Computer Science.
            </TimePeriod>
            <h2>Military Service</h2>
            <TimePeriod name="Air Force" years={[2008, 2011]}>
              Anti-aircraft launcher operator. Full time military service.
            </TimePeriod>
          </div>
        </div>
        <div className={styles.languages}>
          <h2>Languages</h2>
          <ul>
            <li>Hebrew – native</li>
            <li>English – fluent</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

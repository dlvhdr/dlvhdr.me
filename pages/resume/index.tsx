import React from "react";
import GithubIcon from "../../components/Icons/GithubIcon";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import Layout from "../../components/Layout/Layout";
import Company from "../../components/Resume/Company";
import TimePeriod from "../../components/Resume/TimePeriod";
import styles from "./resume.module.css";
import utilStyles from "../../styles/utils.module.css";
import classNames from "classnames";

export default function Resume() {
  return (
    <Layout
      className={styles.layout}
      navClassName={styles.layoutNav}
      footerClassName={styles.layoutFooter}
      home={true}
      wide={true}
    >
      <div className={styles.root}>
        <div className={styles.headerForSmallScreens}>
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
              <img src="images/person.svg" height="20px" width="20px" />
              <a
                className={styles.linkedin}
                href="https://dlvhdr.me"
                target="_blank"
                rel="noreferrer"
              >
                https://dlvhdr.me
              </a>
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
        </div>

        <div className={styles.sidebar}>
          <div className={styles.title}>
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
                <img src="images/person.svg" height="20px" width="20px" />
                <a
                  className={styles.linkedin}
                  href="https://dlvhdr.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://dlvhdr.me
                </a>
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
          </div>
          <div>
            <div className={styles.githubProject}>
              <h4>
                Project -{" "}
                <a
                  className={styles.linkedin}
                  href="https://github.com/dlvhdr/gh-dash"
                  target="_blank"
                  rel="noreferrer"
                >
                  <code>gh-dash</code>
                </a>
              </h4>
              <span className={classNames(styles.stars, utilStyles.subtext)}>
                ⭐ 6k
              </span>
            </div>
            <p>
              A GitHub CLI extension to display a dashboard with pull requests
              and issues by filters you care about.
            </p>
          </div>
          <TimePeriod name="Technion University" years={[2012, 2016]}>
            BSc. in Computer Science.
          </TimePeriod>
          <TimePeriod name="Military Service - Air Force" years={[2008, 2011]}>
            Anti-aircraft launcher operator. Full time military service.
          </TimePeriod>
          <div className={styles.languages}>
            <h4>Languages</h4>
            <ul>
              <li>Hebrew – native</li>
              <li>English – fluent</li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          <h2>Summary</h2>
          <ul>
            <li>
              Full stack engineer with 10+ years of experience in global hi-tech
              companies
            </li>
            <li>
              Front end oriented with extensive knowledge in TypeScript, React,
              React Native, GraphQL, Redux, Zustand etc.
            </li>
            <li>
              Backend skills include Node.js, Go, Swagger, Docker, K8s, Bash
              etc.
            </li>
            <li>
              Self learner, love to lead big projects from planning to
              execution, team player
            </li>
          </ul>
          <h2>Experience</h2>
          <div>
            <Company
              name="Komodor"
              role="Full Stack Developer"
              years={[2023]}
              technologies={[
                "React",
                "Zustand",
                "react-query",
                "Go",
                "Python",
                "PostgreSQL",
                "Kubernetes",
                "Swagger",
              ]}
            >
              <ul>
                <li>
                  Working on the company's{" "}
                  <a href="https://komodor.com/">
                    <i>Kubernets for Humans</i>
                  </a>{" "}
                  webapp and microservices as a fullstack developer
                </li>
                <li>
                  Led multiple features from PRD to implementation, both heavily
                  backend oriented and frontend pixel-perfect ones
                </li>
                <li>
                  Improved our developer experience and code quality standards
                  significantly, from new-employee onboarding to day-to-day
                  experience
                </li>
              </ul>
            </Company>
            <Company
              name="Wix"
              years={[2021, 2023]}
              role="Full Stack Developer"
              technologies={[
                "React",
                "Redux",
                "Node.js",
                "Typescript",
                "Serverless",
                "gRPC",
                "Docker",
                "Microfrontends",
              ]}
            >
              <ul>
                <li>
                  Initiated and led the{" "}
                  <a href="https://www.wix.com/studio/developers">
                    Wix Studio's online IDE
                  </a>{" "}
                  project that saw the move from a basic monaco based solution
                  to a VSCode one
                </li>
                <li>
                  The VSCode Online IDE work included spinning up the
                  containerized IDE with custom autocompletions, linting and
                  extensions
                </li>
                <li>
                  Led the project to auto-update type definitions for Wix NPM
                  packages <i>(was previously done manually)</i>
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
                "React Native",
                "Go",
                "Hack",
                "Android",
                "Docker",
                "Kibana",
              ]}
            >
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
                </li>
                <li>
                  A standout project was implementing an extensible slice and
                  dice query UI that allowed creating custom queries over
                  various metrics and entity tables (customers, retailers, etc.)
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
              <ul>
                <li>
                  Worked at the CAD department on various projects: a Cache
                  Simulator Windows desktop app in C++ using Qt for the GUI, a
                  Thermal Analysis Platform for smartphones and a
                  Power/performance web-app using PrimeFaces.
                </li>
              </ul>
            </Company>
          </div>
        </div>
      </div>
    </Layout>
  );
}

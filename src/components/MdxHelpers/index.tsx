import styles from "./styles.module.css";
import type { JSX } from "react";

export const LightInvertSvg = ({ src, width }): JSX.Element => (
  <img className={styles.lightInvert} src={src} width={width} />
);

export const CenterIt = ({ children }) => <span className={styles.centerIt}>{children}</span>;

export const ThemeInvert = ({ children }) => <span className={styles.lightInvert}>{children}</span>;

export const GithubIssue = ({ issue, repo }) => (
  <a
    title="Related Github Issue"
    className="theme-doc-version-badge badge badge--secondary"
    href={`https://github.com/sun-dragon-cult/${repo}/issues/${issue}`}
    target="_blank"
  >
    <label>
      <img src={"/img/github-mark.svg"} width={"13.5px"} />
      &nbsp;#{issue}
    </label>
  </a>
);

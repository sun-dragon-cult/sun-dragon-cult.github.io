import styles from "./styles.module.css";
import type { JSX, ReactNode } from "react";

export const LightInvertSvg = ({ src, width }: { src: string; width: string }): JSX.Element => (
  <img className={styles.lightInvert} src={src} width={width} />
);

export const CenterIt = ({ children }: { children: ReactNode }): JSX.Element => (
  <span className={styles.centerIt}>{children}</span>
);

export const ThemeInvert = ({ children }: { children: ReactNode }): JSX.Element => (
  <span className={styles.lightInvert}>{children}</span>
);

export const GithubIssue = ({ issue, repo }: { issue: string; repo: string }): JSX.Element => (
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

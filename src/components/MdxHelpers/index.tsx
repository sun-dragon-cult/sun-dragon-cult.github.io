import styles from "./styles.module.css";
import type { JSX } from "react";

export const LightInvertSvg = ({ src, width }): JSX.Element => (
  <img className={styles.lightInvert} src={src} width={width} />
);

export const CenterIt = ({ children }) => <span className={styles.centerIt}>{children}</span>;

import React from "react";
import styles from "./Section.module.css";
type Props = {
  title?: string;
};

export default function Section({ title = "Text" }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.columnleft}>{title}</div>
      <div className={styles.columnright}></div>
    </div>
  );
}

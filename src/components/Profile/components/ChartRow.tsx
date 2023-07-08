import React from "react";
import styles from "./ChartRow.module.css";
type Props = {
  percent?: number;
};

export default function ChartRow({ percent = 100 }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.columnleft} style={{ width: `${percent}%` }} />
      <div
        className={styles.columnright}
        style={{ width: `${100 - percent}%` }}
      />
    </div>
  );
}

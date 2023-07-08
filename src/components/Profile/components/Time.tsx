import React from "react";
import styles from "./Time.module.css";
type Props = {
  year?: string;
  title?: string;
};

export default function Time({
  year = "2010-2015",
  title = "LOREM IPSUM",
}: Props) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.square}></div>
      </div>

      <div className={styles.titleleft}>
        <span> {year}</span>

        <span> {title}</span>
      </div>
    </div>
  );
}

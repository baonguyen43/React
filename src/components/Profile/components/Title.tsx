import React from "react";
import styles from "./Title.module.css";
type Props = {};

export default function Title({}: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.name}>WORTHINGTON</span>
      <span className={styles.job}>ACCTION ACTOR</span>
    </div>
  );
}

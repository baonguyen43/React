import React from "react";
import styles from "./Label.module.css";
type Props = {
  title?: string;
};

export default function Label({ title = "text" }: Props) {
  return (
    <div>
      <div className={styles.container}>{title}</div>
    </div>
  );
}

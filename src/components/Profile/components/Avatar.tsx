import React from "react";
import styles from "./Avatar.module.css";
type Props = {};

export default function Avatar({}: Props) {
  return <img src="/images/avatar-3.jpg" className={styles.avatar} />;
}

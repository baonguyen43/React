import React from "react";
import styles from "./Footer.module.css";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        {" "}
        <img src="/images/insicon.png" width={40} height={40} alt="" />{" "}
      </div>
      <div className={styles.footer}>
        {" "}
        <img src="/images/twicon.png" width={40} height={40} alt="" />{" "}
      </div>
      <div className={styles.footer}>
        <img src="/images/vibericon.png" width={40} height={40} alt="" />{" "}
      </div>
    </div>
  );
}

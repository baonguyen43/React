import React from "react";
import styles from "./Button.module.css";
function Button() {
  return (
    <div className={styles.button}>
      <div className={styles.text}>Get started</div>
      <div className={styles.icon}>
        <img src="/images/rightarrows.png" width="17px" height="16px"></img>
      </div>
    </div>
  );
}

export default Button;

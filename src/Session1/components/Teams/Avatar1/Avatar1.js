import React from "react";
import styles from "./Avatar1.module.css";
function Avatar1() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.leftcolumn}>
            <img
              src="/images/avatar/avatar.png"
              style={{ height: 58, width: 58 }}
              alt=""
            />
          </div>
          <div className={styles.rightcolumn}>
            <div className={styles.title}> Yolanda </div>
            <div className={styles.subtitle}> Web Development</div>
          </div>
          <div className="logo">
            <img
              src="/images/logo/1.png"
              style={{ height: 35, width: 27 }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar1;

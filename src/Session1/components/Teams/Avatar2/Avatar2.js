import React from "react";
import styles from "./Avatar2.module.css";
function Avatar2() {
  return (
    <div className={styles.container}>
      <div className={styles.columnleft}>
        <img src="/images/avatar/maria.png" alt="" />{" "}
      </div>
      <div className={styles.columnright}>
        <div className={styles.title}> María </div>
        <div className="logo">
          <img src="/images/logo/call.png" alt="" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Avatar2;

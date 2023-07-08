import React from "react";
import styles from "./Education.module.css";
import Section from "./Section";
import Time from "./Time";
import Summary from "./Summary";
type Props = {};

export default function Experience({}: Props) {
  return (
    <div>
      <Section title="EXPERIENCE" />
      <div style={{ height: 20 }} />
      <div className={styles.container}>
        <div className={styles.time}>
          <Time year="2010-2015" title="HS:BuiThiXuan" />
        </div>
        <div className={styles.sp1}></div>
        <div className={styles.summary}>
          <Summary />
        </div>
        <div className={styles.sp2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.time}>
          <Time year="2010-2015" title="HS:BuiThiXuan" />
        </div>
        <div className={styles.sp1}></div>
        <div className={styles.summary}>
          <Summary />
        </div>
        <div className={styles.sp2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.time}>
          <Time year="2010-2015" title="HS:BuiThiXuan" />
        </div>
        <div className={styles.sp1}></div>
        <div className={styles.summary}>
          <Summary />
        </div>
        <div className={styles.sp2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.time}>
          <Time year="2010-2015" title="HS:BuiThiXuan" />
        </div>
        <div className={styles.sp1}></div>
        <div className={styles.summary}>
          <Summary />
        </div>
        <div className={styles.sp2}></div>
      </div>
      <div style={{ height: 100 }} />
    </div>
  );
}

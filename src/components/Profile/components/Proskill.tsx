import React from "react";
import Label from "./Label";
import ProTitle from "./ProTitle";
import ChartRow from "./ChartRow";
import styles from "./Proskill.module.css";
type Props = {};

export default function Proskill({}: Props) {
  return (
    <div className={styles.container}>
      <Label title="PRO SKILLS" />
      <div style={{ height: 20 }} />
      <div className={styles.bottom}>
        <ProTitle title="ILLUSTRATOR" />
        <ChartRow percent={80} />
      </div>

      <div className={styles.bottom}>
        <ProTitle title="PHOTOSHOP" />
        <ChartRow percent={60} />
      </div>
      <div className={styles.bottom}>
        <ProTitle title="INDESIGN" />
        <ChartRow percent={75} />
      </div>
      <div className={styles.bottom}>
        <ProTitle title="MS WORD" />
        <ChartRow percent={90} />
      </div>
    </div>
  );
}

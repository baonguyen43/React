import React from "react";
import styles from "./Profile.module.css";
import Title from "./components/Title";
import Avatar from "./components/Avatar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Proskill from "./components/Proskill";
import Footer from "./components/Footer";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftcolumn}>
        <div className={styles.top}>
          <Avatar />
          <Title />
        </div>
        <div className={styles.bottom}>
          <Education />

          <Experience />
          <div style={{ backgroundColor: "#004262", height: 40 }}></div>
        </div>
      </div>
      <div className={styles.rightcolumn}>
        <div className={styles.header}>
          <Contact />
          <Proskill />
        </div>
        <div className={styles.footer}>
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Label from "./Label";
import InfoContact from "./InfoContact";
import styles from "./Contact.module.css";
type Props = {};

export default function Contact({}: Props) {
  return (
    <div className={styles.container}>
      <Label title="CONTACT ME" />
      <div className={styles.content}>
        <div className={styles.columnleft}>
          <img src="/images/iconlocation.png" width={30} height={30} alt="" />{" "}
        </div>
        <div className={styles.columnright}></div>
        <InfoContact
          title="ADDRESS"
          description="123 Street Ociaho, "
          text="New York City, Ohio"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.columnleft}>
          <img src="/images/global.png" width={30} height={30} alt="" />{" "}
        </div>
        <div className={styles.columnright}></div>
        <InfoContact
          title="WEB"
          description="contactme@gmail.com"
          text="www.contactme.com"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.columnleft}>
          <img src="/images/phone-call.png" width={30} height={30} alt="" />{" "}
        </div>
        <div className={styles.columnright}></div>
        <InfoContact
          title="PHONE"
          description="0123 0000 0000 1000 "
          text="0123 0000 0000 1000"
        />
      </div>
    </div>
  );
}

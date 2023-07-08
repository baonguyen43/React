import React from "react";
import Button from "./components/Button/Button";
import styles from "./FlexTest.module.css";
import Button2 from "./components/Button/Button2";
import Teams from "./components/Teams";
import Avatar1 from "./components/Teams/Avatar1/Avatar1";
import Avatar2 from "./components/Teams/Avatar2/Avatar2";
function FlexTest() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.bt}>
        <Button />
        <Button2 text="Continue with Apple " />
        <Button2
          color="white"
          textColor="black"
          text="Continue with Google"
          iconName="Glogo"
        />
        <Button2
          color="white"
          textColor="black"
          text="Continue with Facebook "
          iconName="Flogo"
        />

        {/* Avatar  */}
      </div>
      <div className={styles.av}>
        <Avatar1 />
        <Avatar2 />
        <Teams color="#12c0e7" user={["avatar-1.png"]} title="Miriam Jimenez" />
        <Teams
          color="#740ef5"
          user={["avatar-1.png", "avatar-2.png", "avatar-3.png"]}
          title="Teams"
          subtitle="Two currently"
        />
        <Teams
          color="yellow"
          user={["avatar-2.png", "avatar-3.png"]}
          title="New Teams"
          colortitle="black"
        />
      </div>
    </div>
  );
}

export default FlexTest;

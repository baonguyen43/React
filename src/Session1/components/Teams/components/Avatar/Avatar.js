import React from "react";
import styles from "./Avatar.module.css";
function Avatar({
  avatar = "avatar-1.png",
  style = null,
  borderColor = "#740EF5",
}) {
  const avtarStyle = {
    ...style,
    borderColor: borderColor,
  };
  return (
    <div className={styles.avatar} style={avtarStyle}>
      <img src={`/images/avatar/${avatar}`} style={{ width: "100%" }} alt="" />
    </div>
  );
}

export default Avatar;

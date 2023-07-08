import React from "react";
import styles from "./Button2.module.css";
function Button2({
  color = "#000000",
  textColor = "#ffffff",
  borderColor = "#000000",
  iconName = "apple",
  text = " text ",
}) {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: color,
        border: "2px solid",
        borderColor: borderColor,
      }}
    >
      <div className={styles.icon}>
        <img src={`/images/${iconName}.png`} width="20" height="22" alt="" />
      </div>
      <div className={styles.text} style={{ color: textColor }}>
        {text}
      </div>
      <div className={styles.icon}></div>
    </div>
  );
}

export default Button2;

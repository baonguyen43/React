import React from "react";
import Avatar from "./components/Avatar/Avatar";
import styles from "./Teams.module.css";
function Teams({
  color = "#12c0e7",
  user = ["avatar-1.png", "avatar-2.png", "avatar-3.png"],
  title = "Title",
  colortitle = "white",
  subtitle = null,
}) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div className={styles.columnleft}>
        {user.map((item, index) => {
          // let marginLeft = 0;
          // if (index >0){
          //   marginLeft = -20
          // }
          // return (
          //   <Avatar avatar={item} style={{ marginLeft: marginLeft  }} />
          // ); biểu thức cũ
          return (
            <Avatar
              avatar={item}
              borderColor={user.length === 1 ? "white" : color}
              style={{ marginLeft: index > 0 ? -20 : 0 }}
            />
          );
        })}
        {/* <Avatar />
        <Avatar avatar="avatar-2.png" style={{ marginLeft: -20 }} />
        <Avatar avatar="avatar-3.png" style={{ marginLeft: -20 }} /> */}
      </div>
      <div className={styles.columnright}>
        <div className={styles.title} style={{ color: colortitle }}>
          {title}{" "}
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default Teams;

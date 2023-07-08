import React from "react";
import styles from "./DoD.module.css";
import Votestar from "../../../Examples/Gallery/Votestar";
import ChartBar from "../../../Examples/Gallery/ChartBar";
function DoD({
  discount1 = "39",
  imgProduct = "1",
  titleShop = "YOUNG SHOP",
  discount2 = "1,4227",
  discount3 = "1,025.5",
  discount4 = "18",
  productName = "LG White Front Load Steam Washer",
}) {
  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
        <text className={styles.Toptop}>-{discount1}% </text>{" "}
      </div>
      <div className={styles.TopContent}>
        <img
          src={`/images/session2/${imgProduct}.jpg`}
          alt=""
          width="240px"
          height="300px"
        />
      </div>
      <div className={styles.TopBottom}> {titleShop} </div>
      <div className={styles.Bottom}>
        <div className={styles.BotPrice}>
          <text className={styles.green}> ${discount2} </text>
          <text className={styles.grey}> ${discount3} </text>
          <text className={styles.red}> {discount4}% off </text>
        </div>
        <div> </div>
        <div className={styles.blue}> {productName} </div>
        <div className={styles.star}>
          {" "}
          <Votestar />{" "}
        </div>
        <div className={styles.char}>
          {" "}
          <ChartBar />{" "}
        </div>
        <div className={styles.BotText}> Sold 10 </div>
      </div>{" "}
    </div>
  );
}

export default DoD;

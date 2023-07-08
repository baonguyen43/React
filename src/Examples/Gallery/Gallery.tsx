import React from "react";

import styles from "./Gallery.module.css";
type Props = {};

const maxImg = 4;
export default function Gallery({}: Props) {
  const [index, setIndex] = React.useState(1);
  let imgPath = `/images/rain${index}.jpg`;
  return (
    <div className={styles.main}>
      <img className={styles.imageBig} src={imgPath} alt="" />
      <br />

      <button
        disabled={index === 1}
        className={styles.btnPre}
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        PREVIOUS
      </button>

      <span>{index}</span>

      <button
        disabled={index === maxImg}
        className={styles.btnNext}
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        {" "}
        NEXT{" "}
      </button>
    </div>
  );
}

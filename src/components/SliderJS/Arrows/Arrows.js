import React, { useContext } from "react";
import { SliderContext } from "../Slider";

import styles from "./Arrows.module.scss";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={styles.arrows}>
      <div className={`${styles.arrow} ${styles.left}`} onClick={() => changeSlide(-1)} />
      <div className={`${styles.arrow} ${styles.right}`} onClick={() => changeSlide(1)} />
    </div>
  );
}
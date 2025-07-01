import { useState } from "react";
import styles from "./about.module.css";
import AboutLeft from "./aboutleft";
import AboutRight from "./aboutright";

function About({ checkcolor }) {
  return (
    <div className={styles["main-container"]}>
      {/* Color Selector Buttons */}

      <div className={styles.left_side}>
        <AboutLeft />
      </div>

      <div className={styles.right_side}>
        <AboutRight checkcolor={checkcolor} />
      </div>
    </div>
  );
}

export default About;

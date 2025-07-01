import styles from "./Android.module.css";
import Androidleft from "./androidleft";
import Androidright from "./androidright";

function Android() {
  return (
    <div className={styles["main-container"]}>
      {/* Color Selector Buttons */}

      <div className={styles.left_side}>
        <Androidleft />
      </div>

      <div className={styles.right_side}>
        <Androidright />
      </div>
    </div>
  );
}

export default Android;

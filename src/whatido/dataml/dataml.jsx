import styles from "./dataml.module.css";
import DataMlLeft from "./datamlleft";
import DataMLRight from "./datamlright";

function DataMl() {
  return (
    <div className={styles["main-container"]}>
      {/* Color Selector Buttons */}

      <div className={styles.left_side}>
        <DataMlLeft />
      </div>

      <div className={styles.right_side}>
        <DataMLRight />
      </div>
    </div>
  );
}

export default DataMl;

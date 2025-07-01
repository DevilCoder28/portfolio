import styles from "./fullstack.module.css";
import Fullleft from "./fullleft";
import Fullright from "./fullright";

function Fullstack({ checkcolor }) {
  return (
    <div className={styles["main-container"]}>
      {/* Color Selector Buttons */}

      <div className={styles.left_side}>
        <Fullleft checkcolor={checkcolor} />
      </div>

      <div className={styles.right_side}>
        <Fullright />
      </div>
    </div>
  );
}

export default Fullstack;

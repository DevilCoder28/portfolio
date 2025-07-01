import styles from "./institute.module.css";
import Instituteright from "./instituteright";

function Institute() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_side}></div>

      <div className={styles.right_side}>
        <Instituteright />
      </div>
    </div>
  );
}

export default Institute;

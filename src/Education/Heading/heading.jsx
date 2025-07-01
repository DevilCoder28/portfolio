import styles from "./heading.module.css";
import Headingleft from "./headingleft";
import Headingright from "./headingright";

function Heading({ checkcolor }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_side}>
        <Headingleft checkcolor={{ checkcolor }} />
      </div>

      <div className={styles.right_side}>
        <Headingright />
      </div>
    </div>
  );
}

export default Heading;

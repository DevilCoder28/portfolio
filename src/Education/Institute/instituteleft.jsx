import styles from "./instituteleft.module.css";

function Instituteleft({ image }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.logoimage}>
          <img src={image} alt="AVM Logo" />
        </div>
      </div>
    </div>
  );
}

export default Instituteleft;

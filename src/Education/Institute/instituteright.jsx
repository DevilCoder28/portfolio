import styles from "./instituteright.module.css";
function Instituteright() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div className={styles.year}>
          <h3>Atam Vidya Mandir School</h3>
          <p>2018-2019</p>
        </div>
        <div className={styles.course}>
          <p>Secondary Education</p>
        </div>
      </div>

      <div className={styles.point}>
        <p>
          ⚡ Scored excellent marks with strong performance in Science and
          Mathematics.
        </p>
        <p>
          ⚡ Gained foundational knowledge in computer science and logical
          reasoning.
        </p>
        <p>
          ⚡ Actively participated in science exhibitions and inter-school
          competitions.
        </p>
      </div>
      <div className={styles.web}>
        <a href="">Visit Website</a>
      </div>
    </div>
  );
}

export default Instituteright;

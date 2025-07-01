import styles from "./headingright.module.css";
function Headingright() {
  return (
    <div className={styles.right_side}>
      <center>
        <h2 className={styles.edu}>Education</h2>

        <h3 className={styles.para}>Basic Qualification and Certifications</h3>

        <div className={styles.iconRow}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className={styles.icon}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/1200px-GeeksforGeeks.svg.png"
            alt="GeeksforGeeks"
            className={styles.icon}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"
            alt="Kaggle"
            className={styles.icon}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
            alt="HackerRank"
            className={styles.icon}
          />
        </div>
      </center>
    </div>
  );
}

export default Headingright;

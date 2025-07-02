import styles from "./instituteright.module.css";

function Instituteright({ data }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.name}>
          <div className={styles.year}>
            <h3>{data.school || data.university}</h3>
            <p>{data.year}</p>
          </div>
          <div className={styles.course}>
            <p>{data.level}</p>
          </div>
        </div>

        <div className={styles.point}>
          {data.points.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>

        <div className={styles.web}>
          <a href={data.website} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Instituteright;

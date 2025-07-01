import styles from "./androidright.module.css";

function Androidright() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Android Development</h1>

      <div className={styles.iconGrid}>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
            alt="Flutter"
          />
          <span>Flutter</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase"
          />
          <span>Firebase</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <span>Node.js</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
          />
          <span>Express.js</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <span>MySQL</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <span>Git</span>
        </div>
      </div>

      <p className={styles.text}>
        ⚡ Developing Android apps using Flutter and Dart for cross-platform
        support
      </p>
      <p className={styles.text}>
        ⚡ Integrating Firebase for real-time database, notifications, and auth
      </p>
      <p className={styles.text}>
        ⚡ Building secure REST APIs using Node.js, Express.js, and MySQL
      </p>
    </div>
  );
}

export default Androidright;

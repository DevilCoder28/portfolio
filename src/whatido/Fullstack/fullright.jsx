import styles from "./fullright.module.css";

function Fullright() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>MERN Web Development</h1>

      <div className={styles.iconGrid}>
        {/* MERN stack */}
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <span>MongoDB</span>
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React.js"
          />
          <span>React.js</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <span>Node.js</span>
        </div>

        {/* Core Web Technologies */}
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <span>HTML</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <span>CSS</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <span>JavaScript</span>
        </div>
      </div>

      <p className={styles.text}>
        ⚡ Designing beautiful and responsive UIs using HTML, CSS, and
        JavaScript
      </p>
      <p className={styles.text}>
        ⚡ Developing full-stack web applications with MongoDB, Express, React,
        and Node
      </p>
      <p className={styles.text}>
        ⚡ Creating RESTful APIs and integrating backend with modern frontend
        frameworks
      </p>
    </div>
  );
}

export default Fullright;

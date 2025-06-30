import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Ayush Kumar</h1>
      </div>

      <div className={styles.link}>
        <a href="#about" className={styles.tag}>
          About <span className={styles.highlight}></span>
        </a>
        <a href="#education" className={styles.tag}>
          Education <span className={styles.highlight}></span>
        </a>
        <a href="#projects" className={styles.tag}>
          Projects <span className={styles.highlight}></span>
        </a>
        <a href="#skills" className={styles.tag}>
          Skills <span className={styles.highlight}></span>
        </a>
        <a href="#contact" className={styles.tag}>
          Contact <span className={styles.highlight}></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

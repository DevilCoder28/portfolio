import styles from "./navbar.module.css";

function Navbar({ checkcolor }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Ayush Kumar</h1>
      </div>

      <div className={styles.link}>
        {["about", "education", "projects", "skills", "contact"].map(
          (section) => (
            <a key={section} href={`#${section}`} className={styles.tag}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={styles.highlight}
                style={{ backgroundColor: checkcolor }}
              ></span>
            </a>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;

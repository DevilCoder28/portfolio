import styles from "./navbar.module.css";
import { useState } from "react";

function Navbar({ checkcolor, onSectionChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 style={{ color: checkcolor }}>𝒜𝓎𝓊𝓈𝒽 𝒦𝓊𝓂𝒶𝓇</h1>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <div
        className={`${styles.link} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {["about", "education", "projects", "skills", "contact"].map(
          (section) => (
            <button
              key={section}
              className={styles.tag}
              onClick={() => {
                onSectionChange(section);
                setMenuOpen(false); // close menu on selection
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={styles.highlight}
                style={{ backgroundColor: checkcolor }}
              ></span>
            </button>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;

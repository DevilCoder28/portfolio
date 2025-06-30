import { useEffect, useState } from "react";
import styles from "./aboutleft.module.css";

function AboutLeft() {
  const rolelist = [
    "Web Developer .",
    "Flutter Developer .",
    "Data Scientist .",
    "Machine Learning Developer .",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // index of role
  const [charIndex, setCharIndex] = useState(0); // index of character
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rolelist[index];
    let typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      // When finished typing
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      }

      // When finished deleting
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % rolelist.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return (
    <div className={styles.left}>
      <h1 className={styles.name}>Hi, I am Ayush Kumar</h1>
      <h3 className={styles.role}>
        A <span className={styles.typing}>{text}</span>
        <span className={styles.cursor}>|</span>
      </h3>
      <p className={styles.about}>
        A passionate and curious tech enthusiast with a strong foundation in
        data structures, AI/ML, web development, and Flutter. I enjoy building
        scalable and user-friendly solutions that combine clean design with
        real-world impact.
      </p>
      <div className={styles.social}>
        <a
          href="https://github.com/DevilCoder28"
          className={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span name="Github" className="sc-aXZVg iUJZiL">
            <i className="fab fa-github"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ashutosh1919/"
          className={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span name="LinkedIn" className="sc-aXZVg iRQhSR">
            <i className="fab fa-linkedin-in"></i>
          </span>
        </a>
        <a
          href="https://www.instagram.com/layman_brother/"
          className={styles.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span name="Instagram" className="sc-aXZVg hwBOek">
            <i className="fab fa-instagram"></i>
          </span>
        </a>
      </div>
      <div className={styles.star}>
        <button className={styles.buttom}>
          <a href="https://github.com/DevilCoder28">Star Me On GIthub ⭐</a>
        </button>
      </div>
    </div>
  );
}

export default AboutLeft;

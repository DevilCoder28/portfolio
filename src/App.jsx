import { useState } from "react";
import Navbar from "./Navbar/navbar";
import About from "./About/about";
import DataMl from "./whatido/dataml/dataml";
import Fullstack from "./whatido/Fullstack/fullstack";
import Android from "./Android/android";

import Education from "./Education/Eduaction.jsx";
import styles from "./App.module.css";

function App() {
  const [currentColor, setSelectedColor] = useState("#0E6BA8"); // default theme color
  const [activeSection, setActiveSection] = useState("about"); // default section

  const colorOptions = [
    "#1E90FF", // Dodger Blue – vibrant and energetic
    "#FF6F61", // Coral Red – soft yet striking
    "#6A5ACD", // Slate Blue – deep and professional
    "#00BFA6", // Teal Green – fresh and modern
    "#FFC107", // Amber – warm and attention-grabbing
  ];

  return (
    <div className={styles.container}>
      <Navbar checkcolor={currentColor} onSectionChange={setActiveSection} />

      <div className={styles.color_picker}>
        {colorOptions.map((color, index) => (
          <button
            key={index}
            className={styles.color_button}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>

      {activeSection === "about" && (
        <>
          <About checkcolor={currentColor} />
          <center>
            <h2 className={styles.Do}>What I Do?</h2>
          </center>
          <DataMl checkcolor={currentColor} />
          <Fullstack checkcolor={currentColor} />
          <Android checkcolor={currentColor} />
        </>
      )}

      {activeSection === "education" && <Education checkcolor={currentColor} />}

      {/* Add other sections like projects, skills, etc., if needed */}
    </div>
  );
}

export default App;

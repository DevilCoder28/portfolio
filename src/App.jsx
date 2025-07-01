import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar/navbar";
// import "./App.css";
import styles from "./App.module.css";
import About from "./About/about";
import DataMl from "./whatido/dataml/dataml";
import Fullstack from "./whatido/Fullstack/fullstack";
import Android from "./Android/android";

function App() {
  const [currentColor, setSelectedColor] = useState("#0E6BA8"); // default color

  const colorOptions = [
    "#1E90FF", // Dodger Blue – vibrant and energetic
    "#FF6F61", // Coral Red – soft yet striking
    "#6A5ACD", // Slate Blue – deep and professional
    "#00BFA6", // Teal Green – fresh and modern
    "#FFC107", // Amber – warm and attention-grabbing
  ];
  return (
    <div className={styles.container}>
      <Navbar checkcolor={currentColor} />
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
      <About checkcolor={currentColor} />
      <center>
        <h2 className={styles.Do}>What I Do?</h2>
      </center>
      <DataMl checkcolor={currentColor} />
      <Fullstack checkcolor={currentColor} />
      <Android checkcolor={currentColor} />
    </div>
  );
}

export default App;

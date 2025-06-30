import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar/navbar";
// import "./App.css";
import styles from "./App.module.css";
import About from "./About/about";
import DataMl from "./whatido/dataml/dataml";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <About />
      <center>
        <h2 className={styles.Do}>What I Do?</h2>
      </center>
      <DataMl />
    </div>
  );
}

export default App;

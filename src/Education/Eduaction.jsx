import Heading from "./Heading/heading";
import styles from "./education.module.css";
import Institute from "./institute/institute";
// import Institute from "./Institute/institute";

function Education({ checkcolor }) {
  return (
    <div>
      <Heading checkcolor={checkcolor} />
      <center>
        <h2 className={styles.journey}>What is my Journey?</h2>
      </center>
      <Institute />
    </div>
  );
}

export default Education;

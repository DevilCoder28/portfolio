import Heading from "./Heading/heading";
import styles from "./education.module.css";
import Institute from "./Institute/institute";
import LeetCodeAndGFGCard from "./leetcode/leetcode";
import GfgProfileCard from "./gfg/gfgprofilecard";
// import Institute from "./Institute/institute";

function Education({ checkcolor }) {
  return (
    <div className={styles.root}>
      <Heading checkcolor={checkcolor} />
      <center>
        <h2 className={styles.journey}>What is my Journey?</h2>
      </center>
      <Institute />
      <LeetCodeAndGFGCard />
      <GfgProfileCard username="ayushtiwari96" />
    </div>
  );
}

export default Education;

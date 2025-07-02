import styles from "./institute.module.css";
import Instituteleft from "./instituteleft";
import Instituteright from "./instituteright";

function Institute() {
  const educationData = [
    {
      level: "Secondary Education",
      year: "2018–2019",
      school: "Atam Vidya Mandir School",
      board: "CBSE",
      percentage: "79%",
      website: "https://avmschoolldh.com/",
      image: "src/assets/avm.jpeg",
      points: [
        "⚡ Scored excellent marks with strong performance in Science and Mathematics.",
        "⚡ Gained foundational knowledge in computer science and logical reasoning.",
        "⚡ Actively participated in science exhibitions and inter-school competitions.",
      ],
    },
    {
      level: "Intermediate Education (12th)",
      year: "2020–2021",
      school: "Atam Vidya Mandir School",
      board: "CBSE",
      percentage: "75%",
      website: "https://avmschoolldh.com/",
      image: "src/assets/avm.jpeg",
      points: [
        "⚡ Excelled in Physics and Computer Science with practical lab experience.",
        "⚡ Took part in coding contests and mathematics olympiads.",
        "⚡ Built small C++ projects as part of school curriculum.",
      ],
    },
    {
      level: "Graduation (B.Tech CSE[DS])",
      year: "2021–Present",
      university: "NIET, Greater Noida",
      cgpa: "8.5 CGPA",
      specialization: "Data Science",
      website: "https://www.niet.co.in",
      image: "src/assets/niet.jpg",
      points: [
        "⚡ Pursuing specialization in Data Science.",
        "⚡ Completed multiple projects in Android and Web Development.",
        "⚡ Active member of technical clubs and hackathons.",
      ],
    },
  ];

  return (
    <div className={styles.main_container}>
      {educationData.map((item, index) => (
        <div className={styles.block} key={index}>
          <div className={styles.left_side}>
            <Instituteleft image={item.image} />
          </div>
          <div className={styles.right_side}>
            <Instituteright data={item} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Institute;

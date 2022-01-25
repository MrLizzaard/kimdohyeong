import React from "react";
import SkillCard from "../skillCard/skillCard";
import "./skills.scss";

const Skills = (props) => {
  const skillList = [
    {
      key: 1,
      name: "HTML/CSS",
      text: "html css",
    },
    {
      key: 2,
      name: "React",
      text: "react",
    },
    {
      key: 3,
      name: "Javascript",
      text: "Javascript",
    },
    {
      key: 4,
      name: "NoSQL",
      text: "Nosql",
    },
  ];

  return (
    <div className="skills">
      <div className="skills__cardContainer">
        {skillList.map((skill) => {
          return <SkillCard name={skill.name} text={skill.text} key={skill.key} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

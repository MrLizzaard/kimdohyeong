import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import SkillCard from "../skillCard/skillCard";
import "./skills.scss";

const Skills = (props) => {
  const skillList = [
    {
      key: 1,
      name: "HTML/CSS",
      text: `웹표준을 지키려 노력합니다. <br/> SCSS 문법에 익숙합니다.
      <br/>
      BEM 방법론을 적용할 수 있습니다.
      <br/>
      keyframe, mixin을 활용한 애니메이션을 사용할 수 있습니다.`,
    },
    {
      key: 2,
      name: "React",
      text: `React Router, React Hook등 리액트의 많은 기능 사용 경험이 있습니다. <br/> test`,
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

  const hoverRef = useRef();
  const valueRef = useRef();

  const listener = (e) => {
    if (e.target.tagName !== "LI") return;
    if (e.target.tagName === "LI") {
      console.log(e.target.dataset.value);
      valueRef.current.style.width = `${e.target.dataset.value}%`;
      valueRef.current.innerHTML = `<div class="skills__range-text">${e.target.dataset.value}%</div>`;
    }
  };

  useEffect(() => {
    hoverRef.current.addEventListener("mousemove", listener);
  });

  return (
    <div className="skills">
      <div className="skills__titleContainer">
        <div className="skills__title">Skills.</div>
        <ul className="skills__lists" ref={hoverRef}>
          <li data-value="90">HTML</li>
          <li data-value="80">CSS</li>
          <li data-value="70">Javascript</li>
          <li data-value="60">React</li>
          <li data-value="50">Bootstrap</li>
          <li data-value="40">NodeJs</li>
          <li data-value="30">Express</li>
          <li data-value="20">MongoDB</li>
          <li data-value="80">Firebase</li>
          <li data-value="70">Git</li>
        </ul>
        <div className="skills__range">
          <div className="skills__range-value" ref={valueRef}></div>
        </div>
      </div>
      <div className="skills__cardContainer">
        {skillList.map((skill) => {
          return <SkillCard skill={skill} key={skill.key} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import SkillCard from "../skillCard/skillCard";
import "./skills.scss";

const Skills = (props) => {
  const skillList = [
    {
      key: 1,
      name: "HTML/CSS",
      text: `
      웹표준을 지키려 노력합니다.
      <br/>
      SCSS 문법에 익숙합니다.
      <br/>
      BEM 방법론을 적용할 수 있습니다.
      <br/>
      keyframe, mixin을 활용한 애니메이션을 사용할 수 있습니다.`,
    },
    {
      key: 2,
      name: "Database",
      text: `
      Firebase, MongoDB의 사용경험이 있습니다.
      <br/>
      Schema를 설정하고 사용할 수 있습니다.
      <br/>
      로그인 서비스를 구현 할 수 있습니다.
      `,
    },
    {
      key: 3,
      name: "Javascript",
      text: `
      ES6+ 문법에 익숙합니다.
      <br/>
      webpack, parcel 등의 번들러 사용 경험이 있습니다.
      <br/>
      `,
    },
    {
      key: 4,
      name: "React",
      text: `
      React Router, Hook등 리액트의 많은 기능 사용 경험이 있습니다.
      <br/>
      `,
    },
  ];

  const hoverRef = useRef();
  const valueRef = useRef();

  const listener = (e) => {
    if (e.target.tagName !== "LI") return;
    if (e.target.tagName === "LI") {
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
          <li data-value="85">CSS</li>
          <li data-value="80">Javascript</li>
          <li data-value="85">React</li>
          <li data-value="50">Bootstrap</li>
          <li data-value="60">NodeJs</li>
          <li data-value="60">Express</li>
          <li data-value="60">MongoDB</li>
          <li data-value="70">Firebase</li>
          <li data-value="75">Git</li>
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

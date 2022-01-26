import React, { useEffect, useRef } from "react";
import "./skillCard.scss";

const SkillCard = ({ skill }) => {
  const boxRef = useRef();
  useEffect(() => {
    boxRef.current.innerHTML = skill.text;
  });
  return (
    <div data-aos="flip-down" className="skills__card">
      <div className="skills__card--title">{skill.name}</div>
      <div className="skills__card--text" ref={boxRef}></div>
    </div>
  );
};

export default SkillCard;

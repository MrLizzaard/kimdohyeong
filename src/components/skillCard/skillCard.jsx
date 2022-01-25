import React from "react";
import "./skillCard.scss";

const SkillCard = ({ name, text }) => {
  return (
    <div data-aos="flip-down" className="skills__card">
      <div className="skills__card--title">{name}</div>
      <div className="skills__card--text">{text}</div>
    </div>
  );
};

export default SkillCard;

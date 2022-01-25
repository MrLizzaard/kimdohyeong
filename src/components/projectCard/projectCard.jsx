import React from "react";
import "./projectCard.scss";

const ProjectCard = ({ project, aos }) => {
  return (
    <div className="projects__card" data-aos={aos}>
      <div className="projects__card-form">
        <div className="project__card-title">{project.title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import "./projectCard.scss";

const ProjectCard = ({ project, aos }) => {
  const boxRef = useRef();

  useEffect(() => {
    boxRef.current.innerHTML = project.description;
  });

  return (
    <div className="projects__card" data-aos={aos} data-aos-delay="300">
      <div className="projects__card-form">
        <img src={project.imgSrc} alt="project" />
        <ul className="projects__card-stacks">
          {project.stack.map((stack) => {
            return <li key={stack}>{stack}</li>;
          })}
        </ul>
        <div className="project__card-title">{project.title}</div>
        <div className="project__card-description" ref={boxRef}></div>
        <a className="project__icon" href={project.src} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

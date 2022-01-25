import React from "react";
import ProjectCard from "../projectCard/projectCard";
import "./projects.scss";

const Projects = (props) => {
  const projectsList = [
    {
      key: 1,
      title: "자유게시판",
      stack: ["MongoDB", "Express", "Bootstrap", "ejs"],
      description: `
      첫번째 줄
      <br/>
      두번째 줄
      `,
      gifDirection: "",
    },
    {
      key: 2,
      title: "RealTime DataBase",
      stack: ["MongoDB", "Express", "Bootstrap", "ejs"],
      description: `
      첫번째 줄
      <br/>
      두번째 줄
      `,
    },
  ];
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__container">
        <div className="projects__cards-container">
          {projectsList.map((project) => {
            let aos;
            if (project.key % 2 === 0) {
              aos = "flip-left";
            } else if (project.key % 2 === 1) {
              aos = "flip-right";
            }
            return <ProjectCard project={project} key={project.key} aos={aos} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

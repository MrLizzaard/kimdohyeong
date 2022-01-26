import React from "react";
import ProjectCard from "../projectCard/projectCard";
import "./projects.scss";

const Projects = (props) => {
  const projectsList = [
    {
      id: 1,
      title: "자유게시판",
      stack: ["MongoDB", "Express", "Bootstrap", "ejs"],
      description: `
      Express와 MongoDB를 사용해서 만든 게시판.
      <br/>
      각 페이지는 ejs로 만듦. bootstrap을 사용해 완성.
      <br/>
      mongoDB와 passport라는 middleware를 활용해 아이디, 비밀번호를 만들고 로그인 할 수 있는 시스템을 만듦.
      `,
      imgSrc: "https://user-images.githubusercontent.com/56648090/143528989-d87687fb-a86d-4dea-bd57-36b4560f651d.png",
      src: "https://github.com/MrLizzaard/generalForum",
    },
    {
      id: 2,
      title: "RealTime DataBase를 활용한 사이트",
      stack: ["React", "Firebase"],
      description: `
      Firebase와 React를 이용한 사이트.
      <br/>
      RealTime DataBase를 활용하여 실시간으로 저장됨.
      <br/>
      AuthService를 이용하여 구글과 Github 로그인 기능 구현
      `,
      imgSrc: "https://mrlizzaard.github.io/portfolio/img/project/cardMaker.gif",
      src: "https://github.com/MrLizzaard/card-maker",
    },
    {
      id: 3,
      title: "Youtube API를 활용하여 만든 사이트",
      stack: ["React", "Postman"],
      description: `
      Google Developer에서 제공하는 youtube API를 활용하여 만든 사이트.
      <br/>
      API사용을 더 쉽게 만들어주는 axios와 postman을 사용함.
      <br/>
      fetch후 React를 사용해서 UI 생성
      `,
      imgSrc: "	https://mrlizzaard.github.io/portfolio/img/project/youtubeReact.gif",
      src: "https://github.com/MrLizzaard/youtubeReact",
    },
  ];
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__container">
        <div className="projects__cards-container">
          {projectsList.map((project) => {
            let aos;
            if (project.id % 2 === 0) {
              aos = "flip-left";
            } else if (project.id % 2 === 1) {
              aos = "flip-right";
            }
            return <ProjectCard project={project} key={project.id} aos={aos} />;
          })}
        </div>
      </div>
      <div className="projects__copyright">
        Developed By <span className="projects__copyright-name">KimDoHyeong</span>
      </div>
    </div>
  );
};

export default Projects;

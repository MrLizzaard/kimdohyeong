import React from "react";
import "./Home.scss";

const Home = (props) => (
  <div className="home">
    <div className="home__typingSlider">
      <p>JavaScript</p>
      <p>HTML/CSS</p>
      <p>React</p>
    </div>
    <div className="home__profile">
      <div className="home__profile--img">
        <div className="home__profile--img-description">
          <span>김도형</span>
          <br />
          <span>1995.08.14</span>
          <br />
          <span>Kyungsung Univ.</span>
        </div>
      </div>
      <ul className="home__profile--contact">
        <li>
          <a href="mailto:dhk21512@gmail.com">dhk21512@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/MrLizzaard/kimdohyeong" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
        </li>
      </ul>
    </div>
    <div className="home__introduce">
      유저들을 위해 꾸준히 발전해 나가는 프론트엔드 주니어개발자 김도형입니다.
      <br />
      웹 프레임워크인 Express와 Firebase, MongoDB와 같은 데이터베이스까지
      <br />
      적극적으로 여러 분야를 다룰 수 있도록 공부하고있습니다.
      <br />
      스펀지처럼 어떤 지식이든 받아들일 준비가 되어있고 최신 스택을 공부해 나가겠습니다.
      <br />
      개발자로써 더 보기좋고 유저 친화적인 웹사이트를 만들 수 있도록 노력하겠습니다.
    </div>
  </div>
);

export default Home;

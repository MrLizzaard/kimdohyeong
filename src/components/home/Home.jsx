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
      <ul>
        <li>dhk21512@gmail.com</li>
        <li>GITHUB</li>
      </ul>
    </div>
  </div>
);

export default Home;

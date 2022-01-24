import React from "react";
import "./App.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import TestCard from "./components/testCard/TestCard";
import Home from "./components/home/Home";

Aos.init();

const App = (props) => (
  <>
    <div className="starBg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span>김도형의</span>
        <br />
        <span>포트폴리오입니다</span>
      </div>
    </div>
    <div className="homePageLayout">
      <div className="transparantPage"></div>
      {/* home */}
      <Home />
      {/* aboutme */}
      <div>aboutme</div>
      {/* project */}
      <div>project</div>
      {/* contact */}
      <div>contact</div>
    </div>
  </>
);

export default App;

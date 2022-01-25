import React from "react";
import { gsap } from "gsap";
import "./App.scss";
import StarBg from "./components/starBg/starBg";
import Home from "./components/home/Home";

const App = (props) => {
  return (
    <>
      <StarBg gsap={gsap} />
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
};

export default App;

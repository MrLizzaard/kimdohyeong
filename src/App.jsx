import React from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import StarBg from "./components/starBg/starBg";
import Home from "./components/home/Home";
import Skills from "./components/skills/skills";

AOS.init();

const App = (props) => {
  return (
    <>
      <StarBg gsap={gsap} />
      <div className="homePageLayout">
        <div className="transparantPage"></div>
        <Home />
        {/* skills */}
        <Skills />
        {/* project */}
        <div>project</div>
      </div>
    </>
  );
};

export default App;

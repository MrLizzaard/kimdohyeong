import React from "react";
import "./App.scss";
import StarBg from "./components/starBg/starBg";
import Home from "./components/home/Home";

const App = (props) => (
  <>
    <StarBg />
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

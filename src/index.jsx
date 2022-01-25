import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

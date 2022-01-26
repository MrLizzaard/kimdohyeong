import React, { useEffect, useRef, useState } from "react";
import "./starBg.scss";

const StarBg = ({ gsap }) => {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  setPageHeight(0);
  const boxRefFirst = useRef();
  const boxRefSecond = useRef();

  const listener = () => {
    setScrollY(Math.round((window.pageYOffset / pageHeight) * 100));
    if (scrollY > 100) {
      boxRefFirst.current.style.display = "none";
      boxRefSecond.current.style.display = "none";
    } else if (scrollY < 10) {
      boxRefFirst.current.style.transform = `translateX(0%)`;
      boxRefSecond.current.style.transform = `translateX(0%)`;
    } else {
      boxRefFirst.current.style.transform = `translateX(${scrollY}%)`;
      boxRefSecond.current.style.transform = `translateX(-${scrollY}%)`;
      boxRefFirst.current.style.display = "block";
      boxRefSecond.current.style.display = "block";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div className="starBg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <div ref={boxRefFirst}>KIM DO HYEONG</div>
        <br />
        <br />
        <div ref={boxRefSecond}>FRONTEND</div>
      </div>
    </div>
  );
};

export default StarBg;

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Techstack from "./pages/Techstack";
import "./App.scss";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techstackRef = useRef<HTMLDivElement>(null);

  const [componentTops, setComponentTops] = useState<any>({});
  const [activeSection, setActiveSection] = useState<string>("home");

  //scroll to the id of the section
  const scroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useLayoutEffect(() => {
    setComponentTops({
      aboutTop: aboutRef.current?.offsetTop,
      techstackTop: techstackRef.current?.offsetTop,
      portfolioTop: portfolioRef.current?.offsetTop,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onScroll = () => {
    if (window !== undefined) {
      let yPosition = window.scrollY;
      if (yPosition > componentTops.portfolioTop - window.innerHeight / 2) {
        setActiveSection("portfolio");
      } else if (
        yPosition >
        componentTops.techstackTop - window.innerHeight / 2
      ) {
        setActiveSection("techstack");
      } else if (yPosition > componentTops.aboutTop - window.innerHeight / 2) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    }
  };

  return (
    <div className="app">
      <div className="layout-container">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home scroll={scroll} />
                <About ref={aboutRef} />
                <Techstack ref={techstackRef} />
                <Portfolio ref={portfolioRef} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<Techstack />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;

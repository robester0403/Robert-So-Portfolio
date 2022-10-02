import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Techstack from "./pages/Techstack";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const techstackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home ref={homeRef} />
              <About ref={aboutRef} />
              <Techstack ref={techstackRef} />
              <Portfolio ref={portfolioRef} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

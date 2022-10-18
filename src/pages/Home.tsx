import React, { useState, useEffect } from "react";
import "./Home.scss";
import Button from "../components/Button";
import backgroundImg from "../assets/images/temp-background.jpg";

interface Props {
  scroll: (id: string) => void;
}

const Home: React.FC<Props> = ({ scroll }) => {
  const [reveal, setReveal] = useState<string>("");

  useEffect(() => {
    // conditional class to reveal the page
    setReveal("reveal");
  }, []);

  return (
    <div className="hero">
      <div>Hello My Name is Robert So. I am a developer</div>
      <section className="hero__learn-more">
        <div>Learn a bit more about me</div>
        <div>down arrow</div>
      </section>
    </div>
  );
};

export default Home;

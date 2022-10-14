import React, { useState, useEffect } from "react";
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
    <div className="home" id="home">
      <img
        src={backgroundImg}
        alt="Hero background"
        className="home__bg-image"
      />
      <div className="home__bg-image-overlay"></div>
      <h1 className={"home__title " + reveal}>
        Hi, I'm <span className="home__name">Harman Khera</span>
      </h1>
      <h1 className={"home__job-title " + reveal}>Full-Stack Web Developer</h1>

      <div className={"home__buttons " + reveal}>
        <Button
          onClick={scroll}
          onClickText="#portfolio"
          label="View my work"
        />
        <a href="mailto:robkso@gmail.com" className="home__contact">
          <Button label="Get in touch" />
        </a>
      </div>
    </div>
  );
};

export default Home;

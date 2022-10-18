import React from "react";
import "./About.scss";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about">
      <h2 className="about__title">About me</h2>
      <article>
        I'm a passionate software engineer that uses my experience in finance
        and entrepreneurship to create engaging and robust UI. Some things about
        me:
      </article>
      <ul>
        <li>I love to drink a lot of coffee</li>
        <li>I like to play many types of sports</li>
        <li>I love smoked barbeque and cooking it</li>
      </ul>
    </div>
  );
});

export default About;

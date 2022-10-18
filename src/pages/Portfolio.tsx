import React from "react";
import "./Portfolio.scss";

const data = [
  { title: "project 1" },
  { title: "project 2" },
  { title: "project 3" },
];

const Portfolio = React.forwardRef((props, ref) => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">My Work</h2>
      <section>
        We will need something like project name, date created, image url.
        {data.map((project) => (
          <div>project.title</div>
        ))}
      </section>
    </div>
  );
});

export default Portfolio;

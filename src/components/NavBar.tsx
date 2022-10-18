import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <section className="navbar">
      <div>Robert So</div>
      <div className="navbar__menu">
        <div className="navbar__menu-item">About</div>
        <div className="navbar__menu-item">Techstack</div>
        <div className="navbar__menu-item">Portfolio</div>
      </div>
    </section>
  );
};

export default NavBar;

import React from "react";
import Photo from "../../assets/images/me.png";
import "./style.css";

export default function AboutMe() {
  return (
    <section className="main__aboutme" id="contact">
      <div className="main__aboutme__picture">
        <img src={Photo} alt="" className="main__aboutme__img" />
      </div>
      <div className="main__aboutme__text">
        <h2 className="main__aboutme__title">
          Douglas Lovera
          <br />
          Front-end developer
        </h2>
        <div className="main__aboutme__contact">
          <a
            href="https://linkedin.com/in/douglaslovera/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/doulovera/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/doulovera/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

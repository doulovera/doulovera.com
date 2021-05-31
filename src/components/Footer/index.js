import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer__links">
        <ul>
          <li>
            <a href="https://dev.to/doulovera" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/Pc7CtmgUk2"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://github.com/doulovera"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/doulovera"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/doulovera/doulovera.github.io"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </li>
        </ul>
      </section>
      <section className="footer__resume">
        {/* <a href="#3">My Resume <i className="fas fa-download"></i></a> */}
      </section>
      <section className="footer__copyright">
        <p>&copy; Made by Douglas Lovera - 2021</p>
      </section>
    </footer>
  );
}

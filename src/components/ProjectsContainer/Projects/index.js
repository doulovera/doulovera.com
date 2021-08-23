import React from "react";
import "./style.css";

export default function Projects({
  preview,
  name,
  languages,
  demoUrl,
  repoUrl,
}) {
  return (
    <article className="main__projects__item">
      <div className="main__projects__image">
        <a href={demoUrl} target="_blank" rel="noreferrer">
          <img
            src={preview && preview}
            alt={name}
            className="main__projects__image-preview"
            loading="lazy"
          />
        </a>
      </div>
      <div className="main__projects__body">
        <h5>
          <a
            href={demoUrl}
            className="main__projects__title"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </h5>
        <div className="main__projects__body-languages">
          {languages.map((lang) => (
            <img
              key={lang.name}
              src={lang.url}
              alt={lang.name}
              title={lang.name}
              draggable="false"
            />
          ))}
        </div>
        <div className="main__projects__body-link">
          <a
            href={demoUrl}
            className={demoUrl || "dont-exists"}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="fas fa-external-link-square-alt"></i>
            </span>
            Demo
          </a>
          <a
            href={repoUrl}
            className={repoUrl || "dont-exists"}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="fab fa-github"></i>
            </span>
            Repo
          </a>
        </div>
      </div>
    </article>
  );
}

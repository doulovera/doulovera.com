import React from "react";
import "./style.css";
import HTML from "../../../assets/icons/langs/html.png";
import CSS from "../../../assets/icons/langs/css.png";
import JS from "../../../assets/icons/langs/js.png";
import ReactIcon from "../../../assets/icons/langs/react.png";
import TS from "../../../assets/icons/langs/ts.png";
import BootstrapIcon from "../../../assets/icons/langs/bootstrap.png";
import DiscordJS from "../../../assets/icons/langs/discordjs.png";

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
          {languages.html && <img src={HTML} alt="HTML 5" title="HTML5" />}
          {languages.css && <img src={CSS} alt="CSS 3" title="CSS3" />}
          {languages.js && <img src={JS} alt="JavaScript" title="JavaScript" />}
          {languages.ts && <img src={TS} alt="TypeScript" title="TypeScript" />}
          {languages.react && (
            <img src={ReactIcon} alt="React" title="React.js" />
          )}
          {languages.bootstrap && (
            <img src={BootstrapIcon} alt="Bootstrap 5" title="Bootstrap 5" />
          )}
          {languages.discordjs && (
            <img src={DiscordJS} alt="Discord.js" title="Discord.js" />
          )}
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

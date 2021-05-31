import React from "react";
import "./style.css";
import Projects from "./Projects";

export default function index({ projectList }) {
  return (
    <section className="main__projects" id="projects">
      <h4>Projects</h4>
      <section className="main__projects__container">
        {projectList.map((project, index) => (
          <Projects
            preview={project.preview}
            name={project.name}
            languages={project.languages}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
            key={index}
          />
        ))}
      </section>
    </section>
  );
}

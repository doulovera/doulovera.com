import React from "react";
import "./style.css";
import Projects from "./Projects";

export default function ProjectsContainer({ projectList }) {
  return (
    <section className="main__projects" id="projects">
      <h4 className="section_title">Projects</h4>
      <div className="main__projects__container">
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
      </div>
    </section>
  );
}

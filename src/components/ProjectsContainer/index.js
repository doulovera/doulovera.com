import React from "react";
import Section from "../Section";
import Projects from "./Projects";
import "./style.css";

export default function ProjectsContainer({ projectList }) {
  return (
    <Section title="Proyectos">
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
    </Section>
  );
}

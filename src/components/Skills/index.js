import React from "react";
import Section from "../Section";
import "./style.css";

export default function Skills({ skill }) {
  return (
    <Section title="Skills">
      <div className="main__skills__container">
        {skill.map((item, index) => (
          <article
            className="skills"
            style={{
              backgroundColor: item.background,
              color: item.color ? item.color : "white",
            }}
            key={index}
          >
            {item.name}
          </article>
        ))}
      </div>
    </Section>
  );
}

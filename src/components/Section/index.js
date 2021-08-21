import React from "react";
import "./style.css";

export default function Section({ title, children, customClasses }) {
  return (
    <section className={"main__section " + (customClasses ?? "")}>
      <h4 className="main__section__title">{title}</h4>
      {children}
    </section>
  );
}

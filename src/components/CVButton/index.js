import React from "react";
import "./style.css";

export default function CVButton() {
  return (
    <div className="resume__button">
      <a href="https://drive.google.com/file/d/1qB362_yhEdcQjsDQy8i6TdSWucj-QrJp/view?usp=sharing">
        <span className="resume__text">Currículum Vitae</span>{" "}
        <i className="fas fa-file"></i>
      </a>
    </div>
  );
}

import React from "react";
import CVButton from "../CVButton";
import "./style.css";

export default function Header() {
  return (
    <header>
      <h1 className="header__title">Douglas Lovera</h1>
      <nav className="header__nav">
        <CVButton />
      </nav>
    </header>
  );
}

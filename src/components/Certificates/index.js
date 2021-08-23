import React from "react";
import Section from "../Section";
import "./style.css";

export default function Certificates({ certificatesList }) {
  return (
    <Section title="Certificados">
      <div className="main__certificates__container">
        {certificatesList.map(
          ({ name, companyName, pdfUrl, credentialUrl }, index) => (
            <article className="main__certificates__item" key={index}>
              <div className="main__certificates__item-text">
                <h5>{name}</h5>
                <p className={companyName}>{companyName}</p>
              </div>
              <div className="main__certificates__item-buttons">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="See certificate"
                >
                  <i className="fas fa-file-pdf"></i>
                </a>
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="See credential"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </Section>
  );
}

import React from "react";
import "./style.css";

export default function Certificates({ certificatesList }) {
  return (
    <section className="main__certificates">
      <h4>Certificates</h4>
      <div className="main__certificates__container">
        {certificatesList.map((certificate, index) => (
          <article className="main__certificates__item" key={index}>
            <div>
              <h5 className="">{certificate.name}</h5>
              <p>{certificate.companyName}</p>
            </div>
            <div className="main__certificates__item-buttons">
              <a
                href={certificate.pdfUrl}
                target="_blank"
                rel="noreferrer"
                title="Ver certificado"
              >
                <i className="fas fa-file-pdf"></i>
              </a>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                title="Ver credencial"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

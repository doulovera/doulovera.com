import React, { useState, useEffect } from "react";
import "./style.css";

export default function BlogPost() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [devto, setDevto] = useState({});

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=doulovera")
      .then((res) => res.json())
      .then((res) => {
        const {
          title,
          url,
          description,
          published_at,
          positive_reactions_count,
          cover_image,
          tags,
        } = res[1];
        setDevto({
          title,
          url,
          description,
          published_at,
          positive_reactions_count,
          cover_image,
          tags,
        });
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="main__blogpost">
      <h4>Last Blog Post</h4>
      {!isLoaded && <h3>Cargando...</h3>}
      <article className="main__blogpost__last">
        <p
          className="main__blogpost__last-devto-logo"
          title="Extraído con la API de dev.to"
        >
          <i className="fab fa-dev"></i>
        </p>
        {devto.cover_image && (
          <img
            src={devto.cover_image}
            className="main__blogpost__last-image"
            alt="Article's cover"
          />
        )}
        <h5 className="main__blogpost__last-title">{devto.title}</h5>
        <p className="main__blogpost__last-published-date">
          🕒 {new Date(devto.published_at).toLocaleString()}
        </p>
        <p className="main__blogpost__last-description">{devto.description}</p>
        <p className="main__blogpost__last-tags">
          <i className="fas fa-hashtag"></i> {devto.tags}
        </p>
        <a className="main__blogpost__last-url" href={devto.url}>
          Ver Artículo en dev.to
        </a>
      </article>
    </section>
  );
}

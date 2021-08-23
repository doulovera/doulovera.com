import React, { useState, useEffect } from "react";
import Section from "../Section";
import Tags from "./Tags";
import { getAllPosts } from "../../services/getAllPosts";
import "./style.css";

export default function BlogPost() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [devto, setDevto] = useState({});

  useEffect(() => {
    getAllPosts().then((data) => {
      const {
        title,
        url,
        description,
        published_at,
        positive_reactions_count,
        cover_image,
        tag_list,
      } = data[1];
      setDevto({
        title,
        url,
        description,
        published_at,
        positive_reactions_count,
        cover_image,
        tag_list,
      });
      setIsLoaded(true);
    });
  }, []);

  return (
    <Section
      title={
        <>
          Last Blog Post <i className="fab fa-dev"></i>
        </>
      }
    >
      <article className="main__blogpost__last">
        {devto.cover_image && (
          <a href={devto.url} target="_blank" rel="noreferrer">
            <img
              src={devto.cover_image}
              className="main__blogpost__last-image"
              alt="Article's cover"
              loading="lazy"
            />
          </a>
        )}
        <h5 className="main__blogpost__last-title">
          <a href={devto.url} target="_blank" rel="noreferrer">
            {devto.title}
          </a>
        </h5>
        <p className="main__blogpost__last-published-date">
          {!isLoaded ? (
            <h3>Cargando...</h3>
          ) : (
            `🕒 ${new Date(devto.published_at).toLocaleString()}`
          )}
        </p>
        <p className="main__blogpost__last-description">{devto.description}</p>
        <p className="main__blogpost__last-tags">
          <Tags tags={devto.tag_list} isLoaded={isLoaded} />
        </p>
        <a
          className="main__blogpost__last-url"
          target="_blank"
          rel="noreferrer"
          href={devto.url}
        >
          {!isLoaded ? <h3>Cargando...</h3> : "Ver artículo en dev.to"}
        </a>
      </article>
    </Section>
  );
}

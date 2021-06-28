import React from "react";

export default function Tags({ tags, isLoaded }) {
  return (
    <>
      {isLoaded &&
        tags.map((tag, index) => (
          <span key={index}>
            <i className="fas fa-hashtag"></i> {tag}
          </span>
        ))}
    </>
  );
}

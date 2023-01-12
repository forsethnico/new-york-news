import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, abstract, byline, alt, image, section }) => {
  return (
    <Link to={`/article/${encodeURIComponent(title)}`}>
      <section className="article-card">
        <h1>{title}</h1>
        <img className="story-image" src={image} alt={alt}></img>
      </section>
    </Link>
  );
};

export default Card;

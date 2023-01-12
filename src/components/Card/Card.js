import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, abstract, byline, alt, image, section }) => {
  return (
    <Link to={`/article/${encodeURIComponent(title)}`}>
      <section className="article-card">
        <h1>{title}</h1>
        <h4>{byline}</h4>
        <img className="story-image" src={image} alt={alt}></img>
        <p>Abstract: {abstract}</p>
        <h4>Section: {section}</h4>
      </section>
    </Link>
  );
};

export default Card;

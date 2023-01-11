import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({title, abstract, byline, id, url, alt, image, section}) => {
    return (
        <Link to = {`/${id}`}>
            <section className="article-card">
                <h1>{title}</h1>
                <h2>{byline}</h2>
                <img className="story-image" src={image} alt={alt}></img>
                <p>Abstract: {abstract}</p>
                <h4>Section: {section}</h4>
            </section>
        </Link>
    )
}

export default Card;
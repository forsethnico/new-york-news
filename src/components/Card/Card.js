import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({article}) => {
    return (
        <Link to = {`/${article.id}`}>
            <section className="article-card">
                <h1>{article.title}</h1>
            </section>
        </Link>
    )
}

export default Card;
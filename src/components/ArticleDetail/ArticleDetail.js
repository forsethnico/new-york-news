import { useParams } from "react-router-dom";
import React from "react";

const ArticleDetail = ({ articles }) => {
  const { articleTitle } = useParams();
  const decodedArticleTitle = decodeURIComponent(articleTitle);
  const article = articles.find(
    (article) => article.title === decodedArticleTitle
  );
  const { title, byline, abstract } = article;
  const date = new Date(article.published_date);
  return (
    <section className="article-detail-container">
      <h1>{title}</h1>
      <h4>Published Date: {date.toDateString()}</h4>
      <h4>{byline}</h4>
      <img
        className="story-image"
        src={article.multimedia[1].url}
        alt={article.multimedia[1].caption}
      ></img>
      <p>Caption: {article.multimedia[1].caption}</p>
      <p>Abstract: {abstract}</p>
      <a href={article.url}>
        <h4>Read full article</h4>
      </a>
    </section>
  );
};

export default ArticleDetail;

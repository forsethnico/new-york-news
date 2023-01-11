import { useState, useEffect } from "react";
import "./ArticleContainer.css";
import Card from "../Card/Card";
import { fetchArticles } from "../../utilities/apiCalls";

const ArticleContainer = ({ section }) => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles("travel")
      .then((response) => {
        if (response.results.length > 0) {
          setLoaded(true);
          console.log(response);
          setArticles(response.results);
        } else {
          setError("Failed to fetch data. Try again.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [section]);

  const filteredStories = articles.filter(article => article.item_type === "Article")
  const storyCards = filteredStories.map((article) => {
    const { title, abstract, byline, section, uri, id } = article;
    return (
      <Card
        title={title}
        abstract={abstract}
        byline={byline}
        key={uri}
        section={section}
        url={article.short_url}
        image={article.multimedia[0].url}
        alt={article.multimedia[0].caption}
        id={id}
      />
    );
  });
  if (loaded) {
    return (
      <section className="article-container">
        <div className="story-cards">{storyCards}</div>
      </section>
    );
  }
};

export default ArticleContainer
